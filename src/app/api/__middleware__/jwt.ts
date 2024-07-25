import { createApp } from "@/lib/hono";
import { jwt } from "hono/jwt";

const app = createApp().use(
  "/",
  jwt({
    secret: process.env.API_SECRET ?? "",
    alg: "HS256",
  })
);

export default app;
