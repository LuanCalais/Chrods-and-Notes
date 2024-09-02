import mongoose from "mongoose";
import MusicModel from "../models/MusicModel.js";
import { CONNECTION_STRING } from "../constants/index.js";

const updateMusicsSchemaAddColumnColor = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const musics = await MusicModel.find();

    await MusicModel.updateMany(
      {},
      {
        $set: {
          color: "#A0AF84",
        },
      }
    );
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateMusicsSchemaAddColumnColor();
