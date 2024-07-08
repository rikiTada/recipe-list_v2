import { Hono } from "hono";
import { D1Database } from "@cloudflare/workers-types";

export type Bindings = {
  DB: D1Database;
};

export const runtime = "edge";
export const app = new Hono().basePath("/api");

//https://hono.dev/examples/prisma
