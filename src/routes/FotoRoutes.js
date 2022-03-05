import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import FotoControllers from '../controllers/FotoControllers';

const router = new Router();
// foto pois é o nome criado no insomnia Fotos/POST Store, multipart
router.post('/', loginRequired, FotoControllers.store);
export default router;
