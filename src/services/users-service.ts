import { getUsers, createUser, deleteUserr, updateUserr } from "../repositories/users-repository";
import User from "../protocols/user-protocol";

export async function getUserss() {
  return await getUsers();
}

export async function createUserr(user: User) {

    return await createUser(user);
}

export async function deleteUser(userId) {

    return await deleteUserr(userId);
}

export async function updateUser(user:User) {

    return await updateUserr(user);
}