import User from '../models/User';

class UserController { // salva
  async store(req, res) { // req recebe, res envia
    try {
      const novoUser = await User.create(req.body); // no insominia eu crio um usuario
      // por json e mando send, esse sjon eu recebo pelo req.body,
      // escreve no insomina  _.base_url/users/

      return res.json(novoUser);/* res.status(200).json({ // o status é para aparecer no insomnia
        'tudo-certo': true,
      }); */
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// faz um map em todos os erros que existe
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users); // retorna todo os users da tabela
    } catch (e) {
      return res.json(null);
    }// escreve no insomina  _.base_url/users/
  }

  // Show
  async show(req, res) {
    try {
      // o req.params vem na rota
      const users = await User.findByPk(req.params.id);
      return res.json(users); // retorna o usser selecionado pelo findByPk();
    } catch (e) {
      return res.json(null);
    }// escreve no insomina  _.base_url/users/
  }

  // Update
  async update(req, res) {
    try {
      // o req.params vem na rota
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // se chegar aqui, tem a certeza que id foi enviado, e tem um usuario com esse id

      const novosDados = await user.update(req.body);

      return res.json(novosDados); // retorna o usser selecionado pelo findByPk();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// escreve no insomina  _.base_url/users/
  }

  // Delete

  async delete(req, res) {
    try {
      // o req.params vem na rota
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // se chegar aqui, tem a certeza que id foi enviado, e tem um usuario com esse id

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// escreve no insomina  _.base_url/users/
  }
}

export default new UserController();
