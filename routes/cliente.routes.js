import { Router } from "express";
import { crearClienteHandler, listarClienteHandler, editarClienteHandler, eliminarClienteHandler} from "../handlers/clienteHandlers.js";

const clienteRouter = Router();
clienteRouter.post("/crear-cliente", crearClienteHandler);
clienteRouter.get("/lista-cliente", listarClienteHandler);
clienteRouter.put("/:id",editarClienteHandler);
clienteRouter.delete("/:id", eliminarClienteHandler)

export default clienteRouter;