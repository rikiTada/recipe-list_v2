import { handle } from "hono/vercel";
import { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { users } from "@/schema";
import { getRequestContext } from "@cloudflare/next-on-pages";

// export type Bindings = {
//   DB: D1Database;
// };

// export const runtime = "edge";
// const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

// app.get("/users", async (c) => {
//   try {

//     const { DB } = getRequestContext().env;
//     // const res = await DB.prepare;
//     const db = drizzle(DB);
//     // const db = drizzle(process.env.DB);
//     const result = await db.select().from(users).all();
//     return c.json(result);
//   } catch (error) {
//     return c.json({ error: (error as Error).message });
//   }
// });

// app.get("/users", async (c) => {
//   return c.json({ name: "John Doe" });
// });

import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Bindings } from "@/app/api";


const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/", async (c) => {
  const adapter = new PrismaD1(c.env.DB);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();

  console.log(users);
  return c.json(users);
});

export default app;


export const GET = handle(app);
