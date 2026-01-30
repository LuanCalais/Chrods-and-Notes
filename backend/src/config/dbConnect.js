import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(
  process.env.MONGODB_URI,
);

const db = mongoose.connection;

export default db;
