import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class EstudanteController {
  async store(req: Request, res: Response) {
    const { nome } = req.body;

    const estudante = await prisma.estudante.create({
      data: {
        nome,
      },
      select: {
        nome: true,
      },
    });

    return res.json(estudante);
  }
}