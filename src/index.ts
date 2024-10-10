import express, { Request, Response } from "express";
import { config } from "dotenv";
import router from "./routes/indexroutes";

config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server has started on PORT:${PORT} sucessfuly`)
);
