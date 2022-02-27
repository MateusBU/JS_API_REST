import { Router } from 'express';
import TokenController from '../controllers/TokenControllers';

const router = new Router();

router.post('/', TokenController.store);// quando acessar o '/', chama a função store de TokenController

export default router;
