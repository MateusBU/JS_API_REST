class HomeController {
  index(req, res) {
    res.status(200).json({ // o status é para aparecer no insomnia
      'tudo-certo': true,
    });
  }
}

export default new HomeController();
