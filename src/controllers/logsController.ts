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

  // Obtém logs por período
  async getLogsByPeriod(req: Request, res: Response) {
    try {
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({
          message: "Parâmetros startDate e endDate são obrigatórios.",
        });
      }

      const logs = await LogModel.find({
        date: {
          $gte: new Date(startDate as string),
          $lte: new Date(endDate as string),
        },
      });

      return res.json(logs);
    } catch (error) {
      console.error("Erro ao buscar logs por período:", error);
      return res.status(500).send("Erro interno do servidor");
    }
  }

  // Obtém logs por conteúdo na propriedade description
  async getLogsByDescription(req: Request, res: Response) {
    try {
      const { searchTerm } = req.query;

      if (!searchTerm) {
        return res
          .status(400)
          .json({ message: "Parâmetro searchTerm é obrigatório." });
      }

      const logs = await LogModel.find({
        description: { $regex: searchTerm as string, $options: "i" },
      });

      return res.json(logs);
    } catch (error) {
      console.error("Erro ao buscar logs por descrição:", error);
      return res.status(500).send("Erro interno do servidor");
    }
  }

  // Obtém logs por conteúdo na propriedade action
  async getLogsByAction(req: Request, res: Response) {
    try {
      const { searchTerm } = req.query;

      if (!searchTerm) {
        return res
          .status(400)
          .json({ message: "Parâmetro searchTerm é obrigatório." });
      }

      const logs = await LogModel.find({
        action: { $regex: searchTerm as string, $options: "i" },
      });

      return res.json(logs);
    } catch (error) {
      console.error("Erro ao buscar logs por descrição:", error);
      return res.status(500).send("Erro interno do servidor");
    }
  }
}

export default new LogController();
