import { createApp } from "@/lib/hono";
import { db } from "@/app/api/[[...route]]/_service";
import { Prisma } from "@prisma/client";

const app = createApp();

app.get("/", async (c) => {
  try {
    const data = await db.shoppingList.getAllShoppingList();
    return c.json({ data }, 200);
  } catch (e) {
    return c.json({ message: "system error", error: e }, 500);
  }
});

app.post("/", async (c) => {
  try {
    const request = await c.req.json<Prisma.ShoppingListCreateInput>();

    const data = await db.shoppingList.createShoppingList(request);
    return c.json({ data }, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "system error", error: e }, 500);
  }
});

export default app;
