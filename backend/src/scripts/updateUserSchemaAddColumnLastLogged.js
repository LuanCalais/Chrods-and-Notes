import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
import { CONNECTION_STRING } from "../constants/index.js";

const updateUserColumnLastLogged = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const users = await UserModel.find();

    await UserModel.updateMany({}, { $set: { lastLogged: new Date() } });

    console.log(`Atualizado ${users.length} com a coluna 'last logged'`);
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateUserColumnLastLogged();
