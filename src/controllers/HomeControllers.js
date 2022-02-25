import aluno from '../models/Aluno';

class HomeController { // salva
  async index(req, res) {
    const novoAluno = await aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'mari@email.com',
      idade: 78,
      peso: 85.32,
      altura: 1.4,
    });

    res.json(novoAluno);
    /* res.status(200).json({ // o status é para aparecer no insomnia
      'tudo-certo': true,
    }); */
  }
}

export default new HomeController();
