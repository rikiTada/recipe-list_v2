import { handle } from "hono/vercel";
import { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { users } from "@/schema";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

// app.get("/", async (c) => {
//   try {
//     let { results } = await c.env.DB.prepare("SELECT * FROM users").all();
//     return c.json(results);
//   } catch (error) {
//     return c.json({ error: (error as Error).message });
//   }
// });

app.get("/users", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    // const db = drizzle(process.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
  } catch (error) {
    return c.json({ error: (error as Error).message });
  }
});

// app.get("/users", async (c) => {
//   return c.json({ name: "John Doe" });
// });

export const GET = handle(app);
