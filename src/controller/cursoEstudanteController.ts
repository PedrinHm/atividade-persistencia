import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class CursoEstudanteController {
  async store(req: Request, res: Response) {
    const {idCurso} = req.body;
    const {idEstudante} = req.body;

    const cursoEstudante = await prisma.cursoEstudante.create({
        data: {
        idEstudante,
        idCurso  
    },
      select: {
        idEstudante: true,
        idCurso: true
      },
    });

    return res.json(cursoEstudante);
  }
}
