import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import aluno from '../models/Aluno';
import user from '../models/User';

const models = [aluno, user];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
