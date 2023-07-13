import UserModel from "../models/UserModel.js"
class UsersController {
    static getAllUsers = async (req, res) => {
        try {
            const users = await UserModel.find()
            res.status(200).send(users)
        } catch (err) {
            res.status(400).send({message: `${err.message} - We sorry :(`})
        }
    }
}

export default UsersController