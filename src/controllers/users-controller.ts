import express, {Request, Response} from "express"
import User from "../protocols/user-protocol";
import { createUserr, getUserss } from "@/services/users-service";
import httpStatus from "http-status";

export async function  createUsers(req: Request, res: Response) {
    const body = req.body as User
    try {
        createUserr(body);
        res.sendStatus(httpStatus.CREATED);
      } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.CONFLICT);
      }
}

export async function getUsers (req: Request, res: Response) {
    const users = await getUserss();
    res.send(users);
}