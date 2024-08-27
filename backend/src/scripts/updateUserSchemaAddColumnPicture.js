import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
import { CONNECTION_STRING, PROFILE_PICTURE } from "../constants/index.js";

const updateUserSchemaAddColumnPicture = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const users = await UserModel.find();

    await UserModel.updateMany(
      {},
      { $set: { profilePicture: PROFILE_PICTURE.DOG.code } }
    );
    console.log(`Atualizado ${users.length} com a coluna 'profilePicture'`);
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateUserSchemaAddColumnPicture();