import { handle } from "hono/vercel";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { D1Database } from "@cloudflare/workers-types";

import { Hono } from "hono";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  const adapter = new PrismaD1((c.env as { DB: D1Database }).DB);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();
  return c.json(users);
});

app.get("/user", async (c) => {
  return c.json({ name: "John Doe" });
});

export const GET = handle(app);
