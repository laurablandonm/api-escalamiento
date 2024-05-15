import express from "express";
import cors from "cors";
import {getConexion} from "./db/mongo_connection.js"
import { URL_BASE, PORT } from "./config.js";

const app = express();
app.use(cors());
getConexion();
app.listen(PORT, () => console.log(`${URL_BASE}:${PORT}`))