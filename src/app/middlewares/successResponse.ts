import { Response } from "express";

interface SuccessResponseOptions {
  statusCode: number;
  message: string;
  payload?: any;
}

export const successResponse = (
  res: Response,
  options: SuccessResponseOptions
) => {
  const { statusCode = 200, message, payload = {} } = options;
  return res.status(statusCode).json({ success: true, message, payload });
};
