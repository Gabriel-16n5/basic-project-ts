import express, {Request, Response} from "express"
import User from "../protocols/user-protocol";
import { usersService } from "@/services/users-service";
import httpStatus from "http-status";

export async function  createUsers(req: Request, res: Response) {
    const body = req.body as User
        const result = await usersService.createUser(body);
        return res.sendStatus(httpStatus.CREATED)
}

export async function getUsers (req: Request, res: Response) {
    const users = await usersService.getUsers();
    return res.status(httpStatus.OK).send(users);
}

export async function deleteUsers (req: Request, res: Response) {
    const {id} = req.params;
    const userId: number = parseInt(id, 10)
    const result = usersService.deleteUser(userId);
    return res.sendStatus(httpStatus.OK);
}

export async function updateUsers (req: Request, res: Response) {
  const user:User = req.body;
  const result = await usersService.updateUser(user);
  return res.sendStatus(httpStatus.OK);
}