import { prisma } from "@/lib/hono";
import { Prisma } from "@prisma/client";

export const getAllShoppingList = async () => {
  return await prisma.shoppingList.findMany({
    include: {
      type: true,
    },
  });
};

export const createShoppingList = async (
  data: Prisma.ShoppingListCreateInput
) => {
  return await prisma.shoppingList.create({
    data: {
      ...data,
      // username,
      // email,
      // shoppingList: {
      //   create: {
      //     title: "My Shopping List",
      //   },
      // },
    },
  });
};

export const updateShoppingList = async (
  id: string,
  data: Prisma.ShoppingListUpdateInput
) => {
  return await prisma.shoppingList.update({
    where: {
      id,
    },
    data,
  });
};
