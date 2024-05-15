import { config } from "dotenv";

config();
export const PORT = process.env.PORT;
export const URL_BASE = process.env.URL_BASE;
export const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;
export const ATLAS_USER = process.env.ATLAS_USER;
export const ATLAS_APP_NAME  = process.env.ATLAS_APP_NAME ;
export const DB_NAME = process.env.DB_NAME;


