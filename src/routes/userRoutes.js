import { Router } from 'express';
import userControllers from '../controllers/UserControllers';

const router = new Router();

router.post('/', userControllers.store);// como a rota é de post (ver App.route(), tanto que a url ('/') é a mesma) no insomnia tem que ser post
// nessa parte não precisa colocar /store igual ao do app.js, se não fiacria /users/store
export default router;

/*
para listar os usuarios -> index -> GET
cria um novo usuario -> store/create-> POST
apaga um usuario -> delete -> DELETE
mostra um usuario -> show -> GET
atualiza um usuario -> update -> PATCH ou PUT
*/
