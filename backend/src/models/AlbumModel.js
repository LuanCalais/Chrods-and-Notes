import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  albumCreatedAt: { type: String, required: true },
  resume: { type: String, required: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const AlbumModel = mongoose.model("album", albumSchema);

export default AlbumModel;
