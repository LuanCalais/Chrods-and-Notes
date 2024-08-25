import mongoose from "mongoose";
import BandModel from "../models/BandModel.js";
import { CONNECTION_STRING } from "../constants/index.js";

const updateArtistsSchemaAddColumnResume = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING.MONGO_DB);

    const bands = await BandModel.find();
    await BandModel.updateMany(
      {},
      {
        $set: {
          resume: "",
        },
      }
    );

    console.log(
      `Atualizado ${bands.length} com a coluna 'resume'`
    );
  } catch (ex) {
    console.log(`Aconteceu um erro ao executar o script ${ex}`);
  } finally {
    await mongoose.disconnect();
  }
};

updateArtistsSchemaAddColumnResume();
