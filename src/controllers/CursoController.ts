import {Request, Response } from 'express';
import { Curso } from '../model/Curso';

export class CursoController {
    static async create(request: Request, response: Response){
        try {
            const {nome} = request.body;
            const curso = await new Curso().criarCurso(nome);
            return response.json(curso).status(201);
                
        } catch (error) {
            return response.json({msg: error.mensage()}).status(500);
        }
    }

    static async delete(request: Request, response: Response){
        const {id} = request.body;
        new Curso().deletarCurso(id);
        return response.json().status(204);
    }
} 

