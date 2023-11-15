import { Router } from "express";
const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});

import { EstudanteController } from "./controller/estudanteController";
import { CursoController } from "./controller/cursoController";
import { CursoEstudanteController } from "./controller/cursoEstudanteController";

const estudanteController = new EstudanteController();
const cursoController = new CursoController();
const cursoEstudanteController = new CursoEstudanteController();

import uploadsConfig from "./config/multer";
import { uploadFile } from "./uploadFiles";

export const router = Router();

router.post("/estudante", estudanteController.store);

router.post("/curso", cursoController.store);

router.post("/ligacao", cursoEstudanteController.store);

router.post('/imagem', upload.array('images'), (req, res) => {
  for (const image of req.files) {
    if (image && image.tempFilePath) {
      const tempFilePath = image.tempFilePath;
      const originalname = image.originalname;

      // Verifique se tempFilePath é uma string válida antes de prosseguir
      if (typeof tempFilePath === 'string' && tempFilePath.trim() !== '') {
        // Pass the tempFilePath and originalname to the uploadFile function
        uploadFile(tempFilePath, originalname);
      } else {
        console.error('tempFilePath is not a valid string:', tempFilePath);
      }
    } else {
      console.error('Invalid image object:', image);
    }
  }

  res.send('Image uploaded successfully');
});







