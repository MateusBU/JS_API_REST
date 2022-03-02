import User from '../models/User';

class UserController { // salva
  async store(req, res) { // req recebe, res envia
    try {
      const novoUser = await User.create(req.body); // no insominia eu crio um usuario
      // por json e mando send, esse sjon eu recebo pelo req.body,
      // escreve no insomina  _.base_url/users/

      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
      /* res.status(200).json({ // o status é para aparecer no insomnia
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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // vai aparecer só esses campos no insomnia
      console.log('USER_ID', req.userId);
      console.log('USER_EMAIL', req.userEmail);
      /* Tanto o req.userId, quanto o user Email, vieram do middleware do loginRequired */
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

      const { id, nome, email } = users; // vai aparecer só esses campos no insomnia
      return res.json({ id, nome, email }); // retorna o usser selecionado pelo findByPk();
    } catch (e) {
      return res.json(null);
    }// escreve no insomina  _.base_url/users/
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // se chegar aqui, tem a certeza que id foi enviado, e tem um usuario com esse id

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email }); // retorna o usser selecionado pelo findByPk();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// escreve no insomina  _.base_url/users/
  }

  // Delete

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // se chegar aqui, tem a certeza que id foi enviado, e tem um usuario com esse id

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }// escreve no insomina  _.base_url/users/
  }
}

export default new UserController();
