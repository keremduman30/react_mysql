import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DATABASE
});
db.connect(err => {
  if (err) {
    console.error("database connect error: " + err.stack);
    return;
  }
  console.log("database connected");
});
export default db;
