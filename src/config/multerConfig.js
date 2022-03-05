import multer from 'multer';
import { extname, resolve } from 'path';

// o aleatorio é para usar no nome do arquivo, caso o arquivo seja enviado no mesmo instante
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser png ou jpg')); // retorna o erro se não for imagem
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // função cb (callback), dirname - nome da pasta atual volta um,
      // volta mais uma, e chega no uploads
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // muda o nome do arquivo, para o milesungo e o extname é a extensão do nome
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),

};
