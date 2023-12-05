import { Request, Response } from "express";
import LogModel from "../models/logModel";

class LogController {
  // Obtém todos os logs
  async getAllLogs(req: Request, res: Response) {
    try {
      const logs = await LogModel.find();
      console.log("Logs encontrados:", logs);

      // Verificar se logs não está vazio
      if (logs.length === 0) {
        return res.status(404).json({ message: "Nenhum log encontrado." });
      }

      // Se houver logs, enviar a resposta com os logs
      res.json(logs);
    } catch (error) {
      console.error("Erro ao buscar logs:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default new LogController();
