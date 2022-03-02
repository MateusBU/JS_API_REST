const bcryptjs = require('bcryptjs'); // usar para criptografar

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users', // nome da tabela
    [
      {
        nome: 'MATEUS',
        email: 'mateus@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'MATEUS 2',
        email: 'mateus2@email.com',
        password_hash: await bcryptjs.hash('456789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'MATEUS 3',
        email: 'mateus3@email.com',
        password_hash: await bcryptjs.hash('456123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {

  },
};
