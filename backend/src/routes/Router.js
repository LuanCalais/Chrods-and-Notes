import bodyParser from "body-parser";
import router from "./usersRoute.js";

const Routes = (app) => {
  app.get("/", (req, res) => res.send("Welcome to Chords and notes server"));
  // app.get(bodyParser.json(), user);
};

export default Routes;
