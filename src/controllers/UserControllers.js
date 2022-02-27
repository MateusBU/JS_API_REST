import User from '../models/User';

class UserController { // salva
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // no insominia eu crio um usuario
      // por json e mando send, esse sjon eu recebo pelo req.body

      res.json(novoUser);/* res.status(200).json({ // o status é para aparecer no insomnia
        'tudo-certo': true,
      }); */
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// faz um map em todos os erros que existe
  }
}

export default new UserController();
