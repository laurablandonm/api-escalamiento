import { Router } from "express";
import etapaRouter from "./etapa.routes.js";

const router = Router();
router.use("/etapa", etapaRouter);

export default router;