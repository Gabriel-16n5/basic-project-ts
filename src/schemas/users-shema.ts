import Joi from "joi";
import User from "../protocols/user-protocol";

export const userSchema = Joi.object<User>({
email: Joi.string().email().required(),
name: Joi.string().required(),
password: Joi.string().required()
})