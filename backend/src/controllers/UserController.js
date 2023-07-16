import UserModel from "../models/UserModel.js";

class UsersController {
  static createUser = async (req, res) => {
    try {
      const user = UserModel(req.body)
      user.save()
      
      res.status(200).json(user)
    } catch (err) {
      res.status(500).send({
        message: `${err.message} = We sorry, you cannot be registered :(`,
      });
    }
  };

  static getAllUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - We sorry :(` });
    }
  };
}

export default UsersController;
