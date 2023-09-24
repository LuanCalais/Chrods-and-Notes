import bodyParser from "body-parser";
import user from "./userRoute.js";
import band from "./bandsRoute.js";
import music from "./musicRoute.js";

const Routes = (app) => {
  app.get("/", (req, res) => res.send("Welcome to Chords and notes server"));
  app.use(bodyParser.json(), user, band, music);
};

export default Routes;
