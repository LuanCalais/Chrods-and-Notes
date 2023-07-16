import express from "express";
import cors from "cors";
import Routes from "./routes/index.js";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "Connection error :("));

db.once("open", () => {
  console.log("Connection success :)");
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

const port = 3000;
Routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
