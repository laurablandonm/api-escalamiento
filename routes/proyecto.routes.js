import { Router } from "express";
import {crearProyectoHandler,listarProyectoHandler,editarProyectoHandler} from "../handlers/proyectoHandlers.js";

const proyectoRouter = Router();
proyectoRouter.post("/", crearProyectoHandler);
proyectoRouter.get("/lista", listarProyectoHandler);
proyectoRouter.put("/:id",editarProyectoHandler);

export default proyectoRouter;