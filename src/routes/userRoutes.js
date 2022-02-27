import { Router } from 'express';
import userControllers from '../controllers/UserControllers';

const router = new Router();

router.post('/', userControllers.store);// como a rota é de post (ver App.route(), tanto que a url ('/') é a mesma) no insomnia tem que ser post
// nessa parte não precisa colocar /store igual ao do app.js, se não fiacria /users/store

router.get('/', userControllers.index); /* vai ser no mesmo lugar que o de cima,
porem vai chamar a função index do userControllers */

router.get('/:id', userControllers.show); /* vai ser no mesmo lugar que o de cima,
mas vai temos que enviar um id junto que a função irá receber e irá procurar
qual user tem o id, retorno todos seu dados
porem vai chamar a função show do userControllers */

router.put('/:id', userControllers.update); /* chama a função update do user Controllers */

router.delete('/:id', userControllers.delete); /* chama a função delete do user Controllers */
export default router;

/*
para listar os usuarios -> index -> GET
cria um novo usuario -> store/create-> POST
apaga um usuario -> delete -> DELETE
mostra um usuario -> show -> GET
atualiza um usuario -> update -> PATCH ou PUT
*/
