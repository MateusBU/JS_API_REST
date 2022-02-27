// o model é no singular
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class user extends Model {
  static init(sequelize) {
    super.init( // OS NOMES DO CAMPO TEM QUE SER IGUAL AOS DO DATABASE/MIGRATIONS/...
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '', // se não receber dado, o default é vazio
          validate: {
            len: { // para validar, o campo tem que ter uma largura exata
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '', // se não receber dado, o default é vazio
          unique: {
            msg: 'Email existente',
          },
          validate: {
            isEmail: { msg: 'Email invalido' }, // Verifica se é email
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '', // se não receber dado, o default é vazio
        },
        password: {
          type: Sequelize.VIRTUAL, // esse campo não existe na base de dados
          defaultValue: '', // se não receber dado, o default é vazio
          validate: {
            len: { // para validar, o campo tem que ter uma largura exata
              args: [6, 50],
              msg: 'Campo senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    // o addHook executa uma açao antes de algo
    this.addHook('beforeSave', async (users) => {
      users.password_hash = await bcryptjs.hash(users.password, 8);// 8 é o tamanho
      // preenche o hash com o cripto do password
    });
    return this;
  }
}
