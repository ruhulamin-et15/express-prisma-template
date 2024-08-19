import { Response } from "express";

export const errorResponse = (
  res: Response,
  { statusCode = 400, message = "Internal Server Error" }
) => {
  return res.status(statusCode).json({ success: false, message });
};
