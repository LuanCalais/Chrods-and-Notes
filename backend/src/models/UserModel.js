import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isLogged: { type: Boolean, required: false },
  lastLogged: { type: Date, required: false },
  profilePicture: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: true },
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
