import { Router } from "express";
import {crearEtapaHandler, editarEtapaHandler, eliminarEtapaHandler, obtenerEtapasHandler} from "../handlers/etapaHandlers.js"


const etapaRouter = Router();
etapaRouter.post("/", crearEtapaHandler);
etapaRouter.get("/lista", obtenerEtapasHandler);
etapaRouter.put("/:id",editarEtapaHandler);
etapaRouter.delete("/:id", eliminarEtapaHandler)
export default etapaRouter;







