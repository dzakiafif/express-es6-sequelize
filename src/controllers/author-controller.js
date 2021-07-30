import author from '../models/author';

class AuthorController {
  static createAuthor = async (req, res) => {
    try {
      await author.create(req.body);
      const response = {
        message: 'Author success create',
      };
      res.json(response);
    } catch (err) {
      console.log(err);
    }
  }
}

export default AuthorController;
