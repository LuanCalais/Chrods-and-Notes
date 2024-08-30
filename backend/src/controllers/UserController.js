import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { verifyUserObject } from "../utils/index.js";
import moment from "moment-timezone";

class UsersController {
  static createUser = async (req, res) => {
    try {
      req.body.name = req.body.name.toLowerCase();

      // this utils method verify if all the information exists
      if (verifyUserObject(req.body)) {
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

        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();

        let user = UserModel(req.body);

        user.isLogged = false;
        user.password = hash;
        user.save().then((savedUser) => {
          savedUser.id = savedUser._id.toString();
          return savedUser.save();
        });

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

  static getUserById = async (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };

  static deleteUserById = async (req, res) => {
    const id = req.params.id;

    UserModel.deleteOne({ id: id }).then(() => {
      res
        .status(200)
        .send({
          message: "The operation was a success :)",
        })
        .catch((err) => {
          res.status(500).send({
            message: `${err.message} We sorry, something wrong happend`,
          });
        });
    });
  };

  static editUserById = async (req, res) => {
    req.body.updatedAt = new Date();

    const id = req.params.id;
    const body = req.body;

    try {
      const updated = await UserModel.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true }
      );
      res.status(200).send({
        message: `The operation was a success :), ${updated.name} has changed`,
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };

  static getUserByEmail = async (email) => {
    try {
      const queryEmail = { email: email };
      const emailExistence = await UserModel.findOne(queryEmail);
      return emailExistence;
    } catch (err) {
      return `${err.message} We sorry, something wrong happend`;
    }
  };

  static userLogin = async (req, res) => {
    try {
      const { email, password, state } = req.body;
      const user = await this.getUserByEmail(email);

      if (!user) {
        res.status(500).send({
          message: `We sorry, user does not exist`,
        });
        return;
      } else {
        let result = null;
        if (state) {
          const cryptPassword = user.password;
          result = await bcrypt.compare(password, cryptPassword);
        }

        if (result || !state) {
          const updated = await UserModel.findOneAndUpdate(
            { email: email },
            { isLogged: state },
            { lastLogged: moment.tz("America/Sao_Paulo").toDate() },
            { new: true }
          );
          res.status(200).send({
            message: `${state ? "Welcome :)" : "Goodbye :("} , ${updated.name}`,
            data: updated,
          });
        } else {
          res.status(500).send({
            message: `Hey >:( Passwords do not match! Who are you?`,
          });
        }
      }
    } catch (err) {
      res.status(500).send({
        message: `${err.message} `,
      });
    }
  };

  static changePicture = async (req, res) => {
    const { body, params } = req;

    try {
      const updated = await UserModel.findByIdAndUpdate(
        params.userId,
        {
          $set: {
            profilePicture: body.code,
          },
        },
        { new: true }
      );

      res.status(200).send({
        message: `The operation was a success :), ${updated.name} has changed`,
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };
}

export default UsersController;
