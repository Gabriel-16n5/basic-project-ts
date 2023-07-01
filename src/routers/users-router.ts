import { Router } from "express";
import { createUsers, getUsers, deleteUsers, updateUsers } from "../controllers/users-controller";
import { updateUserSchema, userSchema } from "../schemas/users-shema";
import {validateSchema} from "@/middlewares/userValidateSchema"

const usersRouter = Router();

usersRouter.get("/users", getUsers);
usersRouter.post("/users", validateSchema(userSchema), createUsers);
usersRouter.put("/users", validateSchema(updateUserSchema), updateUsers);
usersRouter.delete("/users/:id", deleteUsers);

export default usersRouter;