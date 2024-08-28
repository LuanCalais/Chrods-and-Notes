import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
import { CONNECTION_STRING, PROFILE_PICTURE } from "../constants/index.js";

const updateUserSchemaDefaultColumnPicture = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const users = await UserModel.find();

    await UserModel.updateMany(
      {},
      { $set: { profilePicture: PROFILE_PICTURE.NON.code } }
    );

    console.log(
      `Atualizado ${users.length} com o valor default em 'profilePicture'`
    );
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateUserSchemaDefaultColumnPicture();
