import { Router } from "express";
import {crearEtapaHandler, obtenerEtapasHandler} from "../handlers/etapaHandlers.js"

const etapaRouter = Router();
etapaRouter.post("/", crearEtapaHandler);
etapaRouter.get("/lista", obtenerEtapasHandler);
export default etapaRouter;


