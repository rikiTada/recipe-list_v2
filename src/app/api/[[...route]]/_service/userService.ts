import { prisma } from "@/lib/hono";
import { Prisma } from "@prisma/client";

export const getAllUser = async () => {
  return await prisma.user.findMany({
    include: {
      shoppingList: true,
    },
  });
};

export const createUser = async ({
  username,
  email,
}: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: {
      username,
      email,
      shoppingList: {
        create: {
          title: "My Shopping List",
        },
      },
    },
  });
};
