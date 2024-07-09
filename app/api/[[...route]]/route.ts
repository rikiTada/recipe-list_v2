import { handle } from "hono/vercel";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
const app = new Hono<{ Bindings: Bindings}>().basePath('/api')

import { Hono } from "hono";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM users").all()
  // const { results } = await process.env.DB.prepare("SELECT * FROM customers").all()
  return c.json(results)
});

app.get("/user", async (c) => {
  return c.json({ name: "John Doe" });
});

export const GET = handle(app);
