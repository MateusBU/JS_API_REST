import { Router } from 'express';
import AlunoController from '../controllers/AlunoControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoController.index);// como a rota é de get (ver App.route(), tanto que a url ('/') é a mesma) no insomnia tem que ser get
router.post('/', loginRequired, AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;
