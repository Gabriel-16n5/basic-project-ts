import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl: false
};

const connection = new Pool(configDatabase);

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

export default connection

console.log("banco conectado e rodando")