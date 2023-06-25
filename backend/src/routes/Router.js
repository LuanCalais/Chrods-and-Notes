const Routes = (app) => {
  app.get("/", (req, res) => res.send("Chords and notes server"));
};

export default Routes;
