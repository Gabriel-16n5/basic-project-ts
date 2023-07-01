import connection from "../database/database";
import User from "../protocols/user-protocol";
import UserId from "../protocols/userId-protocol";


export async function getUsers() {
    const result = await connection.query<User>(`SELECT * FROM users`);
    const listUsers = result.rows
    return listUsers;
  }

export async function createUser(user: User) {
    return await connection.query<User>(`
    INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
`, [user.name, user.email, user.password]);
  }

export async function deleteUserr(userId:User) {
    return await connection.query<UserId>(`
    DELETE FROM users WHERE "userId" = $1
`, [userId]);
  }  

  export async function updateUserr(user:User) {
    return  await connection.query(`
    UPDATE users
        SET "name" = $2, email = $3, password = $4
            WHERE "userId" = $1
    ;`, [user.userId, user.name, user.email, user.password])
  }