import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // extrae do token o id e email do user

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    }); /* verifica se o id ou email do usuario bate com o token, isso se dá, caso o usuario
    venha atualiar o seu perfil e queira mudar o email, assim, precisando fazer o login novamente */

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
