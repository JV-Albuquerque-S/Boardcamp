import { Router } from "express";

import {getCustomers, getOneCustomer, postCustomers} from "../controllers/customersController.js";
import { verifyCustomer } from "../middlewares/customersMiddleware.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getOneCustomer);
customersRouter.post("/customers", verifyCustomer, postCustomers);

export default customersRouter;