import aluno from '../models/Aluno';

class AlunoController { // salva
  async index(req, res) {
    const alunos = await aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const alunoStore = await aluno.create(req.body);
      return res.json(alunoStore);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const alunoShow = await aluno.findByPk(id);
      if (!alunoShow) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      return res.json(alunoShow);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const alunoShow = await aluno.findByPk(id);
      if (!alunoShow) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      const alunoAtualizado = await alunoShow.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const alunoShow = await aluno.findByPk(id);
      if (!alunoShow) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      await alunoShow.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
