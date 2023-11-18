import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import BaseResponse from "../../../../../helper/baseResponse/baseResponse";

const prisma = new PrismaClient();

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    if (req.method !== "GET") {
        BaseResponse(res, 505, false, "Method Not Allowed", null);
        return;
      }
      try {
        const data = await prisma.letters.findMany();
    
        return res.status(200).json({ message: "success get data letters", data });
      } catch (error) {
        return res.status(500).json({ message: "failed get data letters", error });
      }
}

