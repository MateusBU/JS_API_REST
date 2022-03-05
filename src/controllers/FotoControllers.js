import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');// O SINGLE, É PQ RECEBE APENAS UM ARQUIVO
/* o multer faz a filtragem do arquivo e o salvamento do texto, reotrna um erro se
o arquivo for errado */
class FotoController { // salva
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}
// o que recebe do middleware upload.single('foto')
export default new FotoController();
