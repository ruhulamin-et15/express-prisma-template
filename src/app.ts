//external imports
import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

//internal imports
import { errorResponse } from "./app/utils/errorResponse";
import { successResponse } from "./app/utils/successResponse";

const app = express();

//middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//router point
app.get("/", (req: Request, res: Response) => {
  successResponse(res, {
    statusCode: 200,
    message: " this is home route",
  });
});

//client error handling
app.use((req, res, next) => {
  next(createHttpError(404, "route not found"));
});

interface CustomError extends Error {
  status?: number;
}

//api handling all errors
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  return errorResponse(res, {
    statusCode: err.status || 500,
    message: err.message,
  });
});

export default app;
