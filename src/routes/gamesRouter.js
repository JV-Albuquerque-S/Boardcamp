import { Router } from "express";

import {postGames, getGames} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.post("/games", postGames);
gamesRouter.get("/games", getGames);

export default gamesRouter;