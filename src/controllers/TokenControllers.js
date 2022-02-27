import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController { // salva
  async store(req, res) {
    const { email = '', password = '' } = req.body; // os dados que recebes estão no req.body
    // console.log(email, password);

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });// procura um user que tenha o email igual

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      // se a senha que eu recebi for diferente da senha do user, retorna erro
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    const { id } = user; // pega o id e o email

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // tipo uma sessão, com isso eu resgato o id e o email do user

    return res.json({ token });
  }
}

export default new TokenController();
