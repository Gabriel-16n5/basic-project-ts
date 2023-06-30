import { getUsers, createUser } from "../repositories/users-repository";
import User from "../protocols/user-protocol";

export async function getUserss() {
  return await getUsers();
}

export async function createUserr(user: User) {

    return await createUser(user);
}