import { Router } from "express";

import {postGames} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.post("/games", postGames);

export default gamesRouter;