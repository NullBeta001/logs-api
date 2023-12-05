import { Router } from "express";
import LogController from "../controllers/logsController";

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: Obtém todos os logs.
 *     description: Obtém uma lista de todos os logs do banco de dados.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de logs.
 *       500:
 *         description: Erro do servidor.
 */

const router = Router();

// Rota para obter logs
router.get("/logs", LogController.getAllLogs);

export default router;
