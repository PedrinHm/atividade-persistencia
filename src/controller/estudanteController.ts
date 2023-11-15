import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class EstudanteController {
  async store(req: Request, res: Response) {
    const { nome } = req.body;
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return {
        path: image.filename,
      };
    });

    const estudante = await prisma.estudante.create({
      data: {
        nome,
        images: {
          create: images,
        },
      },
      select: {
        nome: true,
        images: true,
      },
    });

    return res.json(estudante);
  }
}
