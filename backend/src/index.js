import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Routes from "./routes/index.js";
import db from "./config/dbConnect.js";
dotenv.config();

db.on("error", console.log.bind(console, "Connection error :("));

db.once("open", () => {
  console.log("Connection success :)");
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const port = 3001;
Routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
