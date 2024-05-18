import { Router } from "express";
import { crearTipoProyectoHandler, editarTipoProyectoHandler, eliminarTipoProyectoHandler, listarTipoProyectoHandler } from "../handlers/tipoDeProyectoHandlers.js";


const tipoDeproyectoRouter = Router();
tipoDeproyectoRouter.post("/", crearTipoProyectoHandler);
tipoDeproyectoRouter.get("/lista", listarTipoProyectoHandler);
tipoDeproyectoRouter.put("/:id", editarTipoProyectoHandler);
tipoDeproyectoRouter.delete("/:id", eliminarTipoProyectoHandler);
export default tipoDeproyectoRouter;