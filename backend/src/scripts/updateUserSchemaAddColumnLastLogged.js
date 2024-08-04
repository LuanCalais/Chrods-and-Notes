import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

const updateUserColumnLastLogged = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://KingOfNothing:125678943@kingofnothing.huxpw63.mongodb.net/ChordsAndNotes"
    );

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
