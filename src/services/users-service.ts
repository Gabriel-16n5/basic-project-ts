import { usersRepository } from "../repositories/users-repository";
import User from "../protocols/user-protocol";
import { notFoundError, invalidError } from "../errors";

export async function getUsers() {
    const usersList = await usersRepository.getUsers();
    if(!usersList||usersList.length===0) throw notFoundError("users not found");
    return usersList;
}

export async function createUser(user:User) {
    const userCreated = await usersRepository.createUser(user);
    if(!usersRepository) throw invalidError("we can't create this user")
    return userCreated;
}

export async function deleteUser(userId:number) {
    const userDeleted = await usersRepository.deleteUser(userId);
    if(!userDeleted) throw invalidError("we can't delete this user");
    return userDeleted;
}

export async function updateUser(user:User) {
    const userUpdated = await usersRepository.updateUser(user);
    if(!userUpdated) throw invalidError("we can't update this user");
    return userUpdated;
}

export const usersService = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
}