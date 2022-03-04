import { Router } from 'express';
import multer from 'multer';

import FotoControllers from '../controllers/FotoControllers';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();
// foto pois é o nome criado no insomnia Fotos/POST Store, multipart
router.post('/', upload.single('foto'), FotoControllers.store);// O SINGLE, É PQ RECEBE APENAS UM ARQUIVO
export default router;
