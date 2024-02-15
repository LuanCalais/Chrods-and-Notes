import mongoose from "mongoose";

const bandSchema = new mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  bandCreatedAt: { type: String, required: true },
  banner: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const BandModel = mongoose.model("bands", bandSchema);

export default BandModel;
