import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import { resolve } from 'path';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import AlunoRoutes from './src/routes/AlunoRoutes';
import FotoRoutes from './src/routes/FotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));// salvar os arquivos estáticos em upload
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', AlunoRoutes);
    this.app.use('/fotos/', FotoRoutes);
  }
}

export default new App().app;
