import { Hono } from "hono";

export const runtime = "edge";
export const app = new Hono().basePath("/api");

//https://hono.dev/examples/prisma