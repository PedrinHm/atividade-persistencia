import {Request, Response } from 'express';
import { CursoEstudante } from '../model/CursoEstudante';

export class CursoEstudanteController {
    static async create(request: Request, response: Response){
        try {
            const {idCurso} = request.body;
            const {idEstudante} = request.body;
            const cursoEstudante = await new CursoEstudante().criarCursoEstudante(idCurso, idEstudante);
            return response.json(cursoEstudante).status(201);
                
        } catch (error) {
            return response.json({msg: error.mensage}).status(500);
        }
    }

    static async delete(request: Request, response: Response){
        const {id} = request.body;
        new CursoEstudante().deletarCursoEstudante(id);
        return response.json().status(204);
    }
} 

