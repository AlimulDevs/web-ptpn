import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .status(505)
      .json({ isSuccess: false, message: "Method Not Allowed" });
  }
  try {
    const data = await prisma.user.findMany();

    return res.status(200).json({ message: "success get data user", data });
  } catch (error) {
    return res.status(500).json({ message: "failed get data user", error });
  }
}
