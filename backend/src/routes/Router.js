const Routes = (app) => {
  app.get("/", (req, res) => res.send("Welcome to Chords and notes server"));
};

export default Routes;
