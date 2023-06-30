import { Router } from "express";
import { createUsers, getUsers } from "../controllers/users-controller";
import { userSchema } from "../schemas/users-shema";
import {validateSchema} from "@/middlewares/userValidateSchema"

const usersRouter = Router();

usersRouter.get("/users", getUsers);
usersRouter.post("/users", validateSchema(userSchema), createUsers);

export default usersRouter;