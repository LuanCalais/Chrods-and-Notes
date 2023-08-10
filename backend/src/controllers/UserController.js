import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { verifyObject } from "../utils/index.js";

class UsersController {
  static createUser = async (req, res) => {
    try {
      // this utils method verify if all the information exists
      if (verifyObject(req.body)) {
        const { name, email } = req.body;

        // verify name and e-mail existence
        const queryName = { name: name };
        const queryEmail = { email: email };
        const nameExistence = await UserModel.findOne(queryName);
        const emailExistence = await UserModel.findOne(queryEmail);

        if (nameExistence || emailExistence) {
          res.status(500).send({
            message: "We sorry, some information already registred :(",
          });
          return;
        }
        
        // this create a hash to sended password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        let user = UserModel(req.body);
        user.password = hash;
        user.save();

        res.status(200).json(user);
        return;
      }
      res.status(500).send({
        message: "We sorry, please insert all the required informations >:(",
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
