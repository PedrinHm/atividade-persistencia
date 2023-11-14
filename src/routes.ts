import {Router} from 'express';
import { CursoController } from './controllers/CursoController'; 
import { EstudanteController } from './controllers/EstudanteController';
import { CursoEstudanteController } from './controllers/CursoEstudanteController';

const router = Router();
router.post('/curso', CursoController.create);
router.delete('/curso', CursoController.delete);

router.post('/estudante', EstudanteController.create);
router.delete('/estudante', EstudanteController.delete);

router.post('/cursoEstudante', CursoEstudanteController.create);
router.delete('/cursoEstudante', CursoEstudanteController.delete);

export default router;
