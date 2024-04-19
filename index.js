import express from "express";
import roommatesRouter from "./routes/roommatesRouter.js";
import gastosRouter from "./routes/gastosRouter.js"
import path from "path";
const app = express();
const PORT = process.env.PORT || 3033;
const __dirname = import.meta.dirname;

//mioddleware res json
app.use(express.json());
//carpetos publicas
app.use(express.static(path.join(__dirname, "assets")));

//Routes
app.use(roommatesRouter);
app.use(gastosRouter);

app.listen(PORT, () =>
  console.log(`🔥Server Running on http://localhost:${PORT}`)
);
