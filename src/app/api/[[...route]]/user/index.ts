import { createApp, prisma } from "@/lib/hono";

const app = createApp().get("/", async (c) => {
  try {
    const users = await prisma.user.findMany();
    return c.json({ users }, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "system error" }, 500);
  }
});

export default app;
