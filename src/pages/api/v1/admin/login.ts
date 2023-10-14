import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginResponse } from "../../../../../types";
import BaseResponse from "../../../../../helper/baseResponse/baseResponse";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
   BaseResponse(res, 505, false, "Method Not Allowed", null)
    return;
  }

  try {
    const requestBody: Prisma.UserCreateInput = req.body;

    if (!requestBody.email || !requestBody.password) {
      return BaseResponse(res, 500, false, "field are required", null);
    }

    if (!validator.isEmail(requestBody.email)) {
      return BaseResponse(res, 500, false, "wrong input your email", null);
    }

    const getUser = await prisma.user.findFirst({
      where: {
        email: requestBody.email,
      },
    });

    if (getUser === null) {
      return BaseResponse(res, 404, false, "wrong email or password", null);
    }

    const passwordMatch = await bcrypt.compare(
      requestBody.password,
      String(getUser.password)
    );

    if (!passwordMatch) {
      return BaseResponse(res, 404, false,  "wrong email or password", null)
    }

    const token = jwt.sign(
      {
        id: getUser.id,
        role: getUser.role,
      },
      String(process.env.JWT_SECRET)
    );

    const data: LoginResponse = {
      id: getUser.id,
      role: String(getUser.role),
      token: token,
    };

    return BaseResponse(res, 200, true, "success login user", data);
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "failed login user", error });
  }
}

export default handler;
