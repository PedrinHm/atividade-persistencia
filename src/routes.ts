import { Router } from 'express';
import multer from 'multer';

import { EstudanteController } from './controller/estudanteController';
import { CursoController } from './controller/cursoController';
import { CursoEstudanteController } from './controller/cursoEstudanteController';

const estudanteController = new EstudanteController();
const cursoController = new CursoController();
const cursoEstudanteController = new CursoEstudanteController();

import uploadsConfig from './config/multer';
import { uploadFile } from './uploadFiles';

const upload = multer(uploadsConfig);

export const router = Router();

router.post('/estudante', upload.array('images'), estudanteController.store);

router.post('/curso', cursoController.store);

router.post('/ligacao', cursoEstudanteController.store);

router.post("/imagem", upload.array("images"), async (req, res) => {
  
    const image = req.files[0]; // Assuming only one image is uploaded

    const destinationPath = `${image.originalname}`;
    const filePath = image.path; // Access the path property of the uploaded image object

    await uploadFile(filePath, destinationPath);
});


