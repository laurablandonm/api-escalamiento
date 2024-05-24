import { Router } from "express";
import etapaRouter from "./etapa.routes.js";
import tipoDeproyectoRouter from "./tipoDeProyecto.routes.js";
import clienteRouter from "./cliente.routes.js";
import universidadRouter from "./universidad.routes.js";
import proyectoRouter from "./proyecto.routes.js";

const router = Router();
router.use("/etapa", etapaRouter);
router.use("/tipodeproyecto", tipoDeproyectoRouter);
router.use("/cliente", clienteRouter);
router.use("/universidad", universidadRouter);
router.use("/proyecto", proyectoRouter);
export default router;