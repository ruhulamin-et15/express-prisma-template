import { Response } from "express";

interface SuccessResponseOptions {
  statusCode: number;
  message: string;
  data?: any;
}

export const successResponse = (
  res: Response,
  options: SuccessResponseOptions
) => {
  const { statusCode = 200, message, data = {} } = options;
  return res.status(statusCode).json({ success: true, message, data });
};
