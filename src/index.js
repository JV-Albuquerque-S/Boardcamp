import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import categoriesRouter from "./routes/categoriesRouter.js";

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.use(categoriesRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(chalk.bold.green(`Servidor em pé na porta ${port}`));
});