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
 *         content:
 *           application/json:
 *             example:
 *               - ipAddress: "74.153.138.235"
 *                 date: "2022-08-06"
 *                 time: "18:56:29"
 *                 userName: "Trippledex"
 *                 version: "8.6.6"
 *                 idTransaction: "959933713-1"
 *                 action: "Cross-platform full-range conglomeration"
 *                 description: "proin leo odio porttitor id consequat in consequat ut nulla"
 *       500:
 *         description: Erro do servidor.
 *
 * /logs/period:
 *   get:
 *     summary: Obtém os logs a partir do período especificado.
 *     description: Obtém uma lista de todos os logs do banco de dados a partir do período especificado.
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Data de início do período no formato YYYY-MM-DD.
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Data de término do período no formato YYYY-MM-DD.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de logs no período especificado.
 *         content:
 *           application/json:
 *             example:
 *               - ipAddress: "74.153.138.235"
 *                 date: "2022-08-06"
 *                 time: "18:56:29"
 *                 userName: "Trippledex"
 *                 version: "8.6.6"
 *                 idTransaction: "959933713-1"
 *                 action: "Cross-platform full-range conglomeration"
 *                 description: "proin leo odio porttitor id consequat in consequat ut nulla"
 *       500:
 *         description: Erro do servidor.
 *
 * /logs/description:
 *   get:
 *     summary: Obtém logs por meio de uma palavra-chave.
 *     description: Obtém os logs a partir de uma busca na descrição do log usando uma palavra-chave.
 *     parameters:
 *       - in: query
 *         name: term
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo a ser buscado na descrição dos logs.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de logs que contêm o termo na descrição.
 *         content:
 *           application/json:
 *             example:
 *               - ipAddress: "74.153.138.235"
 *                 date: "2022-08-06"
 *                 time: "18:56:29"
 *                 userName: "Trippledex"
 *                 version: "8.6.6"
 *                 idTransaction: "959933713-1"
 *                 action: "Cross-platform full-range conglomeration"
 *                 description: "proin leo odio porttitor id consequat in consequat ut nulla"
 *       500:
 *         description: Erro do servidor.
 *
 * /logs/action:
 *   get:
 *     summary: Obtém logs por meio de uma palavra-chave em ação.
 *     description: Obtém os logs a partir de uma busca na propriedade action do log usando uma palavra-chave.
 *     parameters:
 *       - in: query
 *         name: term
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo a ser buscado em 'ação' dos logs.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de logs que contêm o termo na ação.
 *         content:
 *           application/json:
 *             example:
 *               - ipAddress: "74.153.138.235"
 *                 date: "2022-08-06"
 *                 time: "18:56:29"
 *                 userName: "Trippledex"
 *                 version: "8.6.6"
 *                 idTransaction: "959933713-1"
 *                 action: "Cross-platform full-range conglomeration"
 *                 description: "proin leo odio porttitor id consequat in consequat ut nulla"
 *       500:
 *         description: Erro do servidor.
 */

const router = Router();

// Rota para obter todos os logs
router.get("/logs", LogController.getAllLogs);

// Rota para obter logs com filtro por período
router.get("/logs/period", LogController.getLogsByPeriod);

// Rota para obter logs com filtro por conteúdo na propriedade description
router.get("/logs/description", LogController.getLogsByDescription);

// Rota para obter logs com filtro por conteúdo na propriedade action
router.get("/logs/action", LogController.getLogsByAction);

export default router;
