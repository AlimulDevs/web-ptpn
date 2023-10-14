import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import validator from "validator";
import BaseResponse from "../../../../../helper/baseResponse/baseResponse";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return BaseResponse(res, 505, false, "Method Not Allowed", null)
  }

  try {
    const requestBody: Prisma.UserCreateInput = req.body;

    if (!requestBody.name || !requestBody.email || !requestBody.password) {
      return BaseResponse(res, 400, false, "field are required", null)
    }

    if (!validator.isEmail(requestBody.email)) {
      return BaseResponse(res, 400, false, "Email Yang Anda Masukkan Salah", null)
    }

    const getUser = await prisma.user.findFirst({
      where: {
        email: requestBody.email,
      },
    });

    if (getUser !== null) {
      return BaseResponse(res, 404, false, "Email Anda Sudah Terdaftar", null)
    }

    const hashPassword = await bcrypt.hash(String(requestBody.password), 10);

    const data = await prisma.user.create({
      data: {
        name: requestBody.name,
        email: requestBody.email,
        password: hashPassword,
        role : "admin"
      },
    });

    return BaseResponse(res, 200, true,  "success create data user", data)
  } catch (error) {
    return BaseResponse(res, 500, false, "failed create data user", error)
  }
}
