import { CursoEstudante as cursoEstudante } from "@prisma/client";
import prismaClient from "../database/prismaClient";

export class CursoEstudante {

    async criarCursoEstudante(idCurso: number, idEstudante: number): Promise <cursoEstudante>{
        const cursoEstudante = await prismaClient.cursoEstudante.create({
            data: {
                idCurso, 
                idEstudante
            },
        });
        return cursoEstudante;
    }

    async deletarCursoEstudante(id: number): Promise <void>{
        await prismaClient.cursoEstudante.delete({
            where: {
                id, 
            },
        });
    }
}