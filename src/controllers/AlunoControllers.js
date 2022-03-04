import aluno from '../models/Aluno';

class AlunoController { // salva
  async index(req, res) {
    const alunos = await aluno.findAll();
    res.json(alunos);
  }
}

export default new AlunoController();
