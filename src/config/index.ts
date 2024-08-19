import dotenv from "dotenv";

dotenv.config();

const serverPort = process.env.PORT || 3000;

export const config = { serverPort };
