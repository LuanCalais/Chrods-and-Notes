import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = mongoose.model("users", userSchema)

export default UserModel