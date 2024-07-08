import { handle } from "hono/vercel";
import { app } from "@/app/api"


app.get("/", async (c) => {
    return c.json({ message: "Hello, Hono🔥" });
});


app.get("/user", async (c) => {
  return c.json({ name: "John Doe" });
});


export const GET = handle(app);