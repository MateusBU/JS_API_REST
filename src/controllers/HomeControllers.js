class HomeController { // salva
  async index(req, res) {
    res.json('IndexHomeController');
    /* res.status(200).json({ // o status é para aparecer no insomnia
      'tudo-certo': true,
    }); */
  }
}

export default new HomeController();
