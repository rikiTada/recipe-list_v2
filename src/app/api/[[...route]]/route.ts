import { createApp } from "@/lib/hono";
import user from "@/app/api/[[...route]]/user";
import cors from "@/app/api/__middleware__/cors";

export const runtime = "edge";

const app = createApp().basePath("/api");
const route = app.route("/*", cors).route("/user", user);

export const GET = route.fetch;
export const POST = route.fetch;

export type ApiType = typeof route;
