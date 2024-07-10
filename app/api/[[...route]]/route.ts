import { handle } from "hono/vercel";
import { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/", async (c) => {
  // const { results } = await c.env.DB.prepare("SELECT * FROM users").all();
  // const { results } = await process.env.DB.prepare(
  //   "SELECT * FROM customers"
  // ).all();
  // return c.json(results);
  try {
    const db = drizzle(c.env.DB);
    const displayId = c.req.valid("param").displayId;
    const result = await db
      .select()
      .from(users)
      .where(eq(users.displayId, displayId));
    const selectedUser = result.at(0);
    if (selectedUser === undefined) {
      return c.body("", 404);
    }
    return c.json({
      user: {
        displayId: selectedUser.displayId,
        name: selectedUser.name,
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error({ message: "エラー", errorMessage: e.message });
      return c.body("", 500);
    }
    console.error({ message: "不明なエラー" });
    return c.body("", 500);
  }
});

app.get("/user", async (c) => {
  return c.json({ name: "John Doe" });
});

export const GET = handle(app);
