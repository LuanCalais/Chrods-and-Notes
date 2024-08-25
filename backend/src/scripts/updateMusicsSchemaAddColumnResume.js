import mongoose from "mongoose";
import MusicModel from "../models/MusicModel.js";
import { CONNECTION_STRING } from "../constants/index.js";

const updateMusicsSchemaAddColumnResume = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const musics = await MusicModel.find();

    await MusicModel.updateMany({}, { $set: { resume: "" } });

    console.log(`Atualizado ${musics.length} com a coluna 'resume'`);
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateMusicsSchemaAddColumnResume();
