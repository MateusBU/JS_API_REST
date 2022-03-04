class FotoController { // salva
  async store(req, res) {
    res.json(req.file); // o que recebe do middleware upload.single('foto')
  }
}

export default new FotoController();
