import {Request, Response } from 'express';
import { Estudante } from '../model/Estudante';

export class EstudanteController {
    static async create(request: Request, response: Response){
        try {
            const {nome} = request.body;
            const {cpf} = request.body;
            const {Telefone} = request.body;
            const estudante = await new Estudante().criarEstudante(nome, cpf, Telefone);
            return response.json(estudante).status(201);
                
        } catch (error) {
            return response.json({msg: error.mensage()}).status(500);
        }
    }

    static async delete(request: Request, response: Response){
        const {id} = request.body;
        new Estudante().deletarEstudante(id);
        return response.json().status(204);
    }
} 

