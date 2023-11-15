import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class CursoController {
  async store(req: Request, res: Response) {
    const { nome } = req.body;

    const curso = await prisma.curso.create({
      data: {
        nome,
      },
      select: {
        nome: true,
      },
    });

    return res.json(curso);
  }
}
