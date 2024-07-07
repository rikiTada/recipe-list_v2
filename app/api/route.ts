import { getAllUser } from "@/lib/service";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const data = getAllUser();

  return NextResponse.json(data);
};
