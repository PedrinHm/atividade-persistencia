import { Estudante as estudante } from "@prisma/client";
import prismaClient from "../database/prismaClient";

export class Estudante {

    async criarEstudante(nome: string, cpf: string, Telefone: string): Promise <estudante>{
        const estudante = await prismaClient.estudante.create({
            data: {
                nome, 
                cpf,
                Telefone,
            },
        });
        return estudante;
    }

    async deletarEstudante(id: number): Promise <void>{
        await prismaClient.estudante.delete({
            where: {
                id, 
            },
        });
    }
}