import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import BaseResponse from "../../../../../helper/baseResponse/baseResponse";
import {HomeResponse} from "../../../../../types";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    BaseResponse(res, 505, false, "Method Not Allowed", null);
    return;
  }

  try {
    const getUser = await prisma.user.findMany();
    const getLetterEnter = await prisma.letters.findMany({
      where: {
        letter_out: false,
      },
    });
    const getLetterOut = await prisma.letters.findMany({
      where: {
        letter_out: true,
      },
    });

    const data : HomeResponse = {
      user_length: getUser.length,
      letter_enter_length: getLetterEnter.length,
      letter_out_length: getLetterOut.length,
    };

    return BaseResponse(res, 200, true, "Success Get Data", data);
  } catch (error) {
    return res.status(500).json({ message: "failed get data", error });
  }
}
