import { NextApiResponse } from "next";

export default async function BaseResponse(
  res: NextApiResponse,
  status : number,
  isSuccess: boolean,
  message: string,
  data: any,
  
) {

  if (data === null) {
    return res.status(status).json({isSuccess,message})
  }

    return res.status(status).json({isSuccess, message, data})
}
