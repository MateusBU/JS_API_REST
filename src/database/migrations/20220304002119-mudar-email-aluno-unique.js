module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(/* muda a coluno... */
    'alunos', /* da tabela alunos */
    'email', /* do campo email */
    {
      type: Sequelize.STRING, /* com os seguintes campos */
      allownNull: false,
      unique: true,
    },
  ),
  down: () => {},
};
