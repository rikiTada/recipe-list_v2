import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { D1Database } from "@cloudflare/workers-types";

// const adapter = new PrismaD1(env.DB as D1Database);
// const prisma = new PrismaClient({ adapter });

const prisma = new PrismaClient();

export const getAllUser = async () => {
  return await prisma.user.findMany();
};
