import { handle } from "hono/vercel";
import { Hono } from "hono";
// import { getRequestContext } from "@cloudflare/next-on-pages";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { app } from "@/app/api";

// export const runtime = "edge";

app.get("/", async (c) => {
  // const { DB } = getRequestContext().env;

  try {
		const adapter = new PrismaD1(c.env.DB)
		const prisma = new PrismaClient({ adapter })

    const users = await prisma.user.findMany();

    return c.json({ name: "John Doe" });
  } catch (error) {
    return c.json({ error });
  }
});

app.get("/users", async (c) => {
  return c.json({ name: "John Doe" });
});

export default app;

export const GET = handle(app);
