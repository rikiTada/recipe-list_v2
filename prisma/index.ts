import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { D1Database } from "@cloudflare/workers-types";
import { ExecutionContext } from "hono";

export interface Env {
  DB: D1Database;
}

export const handler = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const adapter = new PrismaD1(env.DB);
    const prisma = new PrismaClient({ adapter });

    const users = await prisma.user.findMany();
    const result = JSON.stringify(users);
    return new Response(result);
  },
};
