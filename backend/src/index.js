import express from "express";
import Routes from "./routes/index.js";

const app = express();
const port = 3000;
Routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
