module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true, // o campo aluno_id referencia a tabela alunos pelo campo id
      references: { // basicamente é uma foreign key
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL', // se apagar o aluno, apaga tbm a foto, usando 'CASCADE', usando 'SET NULL' apensa fica em branco
      onUpdate: 'CASCADE', // se o id do aluno for mudado, aqui atualiza tbm por causa do CASCADE
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
