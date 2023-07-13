import bodyParser from "body-parser";
import user from "./userRoute.js";

const Routes = (app) => {
  app.get("/", (req, res) => res.send("Welcome to Chords and notes server"));
  app.use(bodyParser.json(), user);
};

export default Routes;
