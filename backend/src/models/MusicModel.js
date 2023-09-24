import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bands",
    required: true,
  },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const MusicModel = mongoose.model("musics", musicSchema);

export default MusicModel;
