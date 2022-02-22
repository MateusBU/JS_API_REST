import { Router } from 'express';
import homeControllers from '../controllers/HomeControllers';

const router = new Router();

router.get('/', homeControllers.index);// como a rota é de get (ver App.route(), tanto que a url ('/') é a mesma) no insomnia tem que ser get

export default router;
