import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { verifyObject } from "../utils/index.js";

class UsersController {
  static createUser = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      if (verifyObject(req.body)) {
        let user = UserModel(req.body);
        user.password = hash;
        user.save();

        res.status(200).json(user);
        return;
      }
      res.status(500).send({
        message: "We sorry, please inserta all the required informations >:(",
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, you cannot be registered :(`,
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
