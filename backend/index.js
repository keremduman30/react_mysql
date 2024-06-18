import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import books from "./src/routers/books.js";
import db from "./src/config/database.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/books", books);

app.listen(process.env.PORT, () => {
  console.log("backend server is running");
});
