import { Router } from 'express';

import FotoControllers from '../controllers/FotoControllers';

const router = new Router();
// foto pois é o nome criado no insomnia Fotos/POST Store, multipart
router.post('/', FotoControllers.store);
export default router;
