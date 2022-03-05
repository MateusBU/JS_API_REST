import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import aluno from '../models/Aluno';
import user from '../models/User';
import Foto from '../models/Foto';

const models = [aluno, user, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
// se existe o associate e o associete(cone....) executa esse model
