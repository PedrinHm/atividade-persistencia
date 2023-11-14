import { Curso as curso } from "@prisma/client";
import prismaClient from "../database/prismaClient";

export class Curso {

    async criarCurso(nome: string): Promise <curso>{
        const curso = await prismaClient.curso.create({
            data: {
                nome, 
            },
        });
        return curso;
    }

    async deletarCurso(id: number): Promise <void>{
        await prismaClient.curso.delete({
            where: {
                id, 
            },
        });
    }
}