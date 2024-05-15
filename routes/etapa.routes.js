import { Router } from "express";
import {crearEtapaHandler} from "../handlers/etapaHandlers.js"

const etapaRouter = Router();
etapaRouter.post("/", crearEtapaHandler);
export default etapaRouter;


