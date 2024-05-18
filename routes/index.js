import { Router } from "express";
import etapaRouter from "./etapa.routes.js";
import tipoDeproyectoRouter from "./tipoDeProyecto.routes.js";

const router = Router();
router.use("/etapa", etapaRouter);
router.use("/tipodeproyecto", tipoDeproyectoRouter);

export default router;