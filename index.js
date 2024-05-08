import express from "express";
import cors from "cors";
import { URL_BASE, PORT } from "./config.js";

const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`${URL_BASE}:${PORT}`))