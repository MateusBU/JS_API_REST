import multer from 'multer';
import multerConfig from '../config/multerConfig';

import foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');// O SINGLE, É PQ RECEBE APENAS UM ARQUIVO
/* o multer faz a filtragem do arquivo e o salvamento do texto, reotrna um erro se
o arquivo for errado */
class FotoController { // salva
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      console.log(aluno_id);
      const Foto = await foto.create({ originalname, filename, aluno_id });

      return res.json(Foto);
    });
  }
}
// o que recebe do middleware upload.single('foto')
export default new FotoController();
