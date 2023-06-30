import connection from "../database/database";
import User from "../protocols/user-protocol";


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