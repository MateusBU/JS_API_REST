// o model é no singular
import Sequelize, { Model } from 'sequelize';

export default class foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.aluno, { foreignKey: 'aluno_id' });
    // no models do aluno, seria = this.hasOne(models.Foto, { foreignKey: 'aluno_id' })
  }
}
