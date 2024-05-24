import { Router } from "express";
import {crearUniversidadHandler,listarUniversidadHandler,editarUniversidadHandler,eliminarUniversidadHandler} from "../handlers/universidadHandlers.js";

const universidadRouter = Router();
universidadRouter.post("/", crearUniversidadHandler);
universidadRouter.get("/lista", listarUniversidadHandler);
universidadRouter.put("/:id",editarUniversidadHandler);
universidadRouter.delete("/:id", eliminarUniversidadHandler)
export default universidadRouter;