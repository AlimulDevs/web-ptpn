import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import BaseResponse from "../../../../../helper/baseResponse/baseResponse";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    BaseResponse(res, 505, false, "Method Not Allowed", null);
    return;
  }

  try {
    const requestBody: Prisma.LettersCreateInput = req.body;

    if (
      !requestBody.date_entry ||
      !requestBody.date_letter ||
      !requestBody.letter_type ||
      !requestBody.no_letter ||
      !requestBody.regarding||
      !requestBody.attachment||
      !requestBody.letter_form||
      !requestBody.characteristic||
      !requestBody.attachment_file_url
    ) {
      return BaseResponse(res, 500, false, "field are required", null);
    }

    const createLetter = await prisma.letters.create({
        data : {
          attachment : requestBody.attachment,
          attachment_file_url : requestBody.attachment_file_url,
          characteristic : requestBody.characteristic,
          date_entry : String(requestBody.date_entry),
          date_letter : String(requestBody.date_letter),
          letter_form : requestBody.letter_form,
          letter_type : requestBody.letter_type,
          no_letter : requestBody.no_letter,
          regarding : requestBody.regarding,
          status : requestBody.status,
          letter_out : false

        }
    })

    return BaseResponse(res,200, true, "success create data letter", createLetter)
  } catch (error) {
    return BaseResponse(res, 500, false, "faileds create data letter", error)
  }
}
