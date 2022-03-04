import { Router } from 'express';
import AlunoController from '../controllers/AlunoControllers';

const router = new Router();

router.get('/', AlunoController.index);// como a rota é de get (ver App.route(), tanto que a url ('/') é a mesma) no insomnia tem que ser get

export default router;
