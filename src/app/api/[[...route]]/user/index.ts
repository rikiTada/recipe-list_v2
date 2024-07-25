import { createApp } from "@/lib/hono";
import { db } from "@/app/api/[[...route]]/_service";
import { Prisma } from "@prisma/client";

const app = createApp();

app.get("/", async (c) => {
  try {
    const data = await db.user.getAllUser();
    return c.json({ data }, 200);
  } catch (e) {
    return c.json({ message: "system error", error: e }, 500);
  }
});

app.post("/", async (c) => {
  try {
    const { username, email } = await c.req.json<Prisma.UserCreateInput>();

    if (!username || !email) {
      throw new Error("username and email are required");
    }

    const data = await db.user.createUser({ username, email });
    return c.json({ data }, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "system error", error: e }, 500);
  }
});

export default app;
