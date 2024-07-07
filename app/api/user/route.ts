import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

export const GET = handle(app);
export const POST = handle(app);

// import { D1Database } from "@cloudflare/workers-types";
// import { Hono } from "hono";
// import { handle } from "hono/vercel";

// export const runtime = "edge";

// // This ensures c.env.DB is correctly typed
// type Bindings = {
//   DB: D1Database;
// };

// const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

// // Accessing D1 is via the c.env.YOUR_BINDING property
// app.get("/user", async (c) => {
//   let { results } = await c.env.DB.prepare("SELECT * FROM users").all();
//   return c.json(results);
// });

// export const GET = handle(app);
