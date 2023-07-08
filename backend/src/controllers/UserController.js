// TODO: fix error in this import
import database from "../models";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await database.Users.findeAll();
      return res.status(200).json(allUsers);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

export default UserController;
