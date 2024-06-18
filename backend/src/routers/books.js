import express from "express";
import db from "../config/database.js";
const router = express.Router();

router.get("/", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

router.post("/add", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?,?,?)";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created");
  });
});
router.delete("/delete", (req, res) => {
  const { id } = req.body;
  const q = "delete from books where id=? ";
  db.query(q, [id], (err, result) => {
    if (err) return res.json(err);
    return res.json("the book deleted successfull");
  });
});
router.put("/update", (req, res) => {
  const q = "UPDATE books SET title = ?, `desc` = ?, cover = ? WHERE id = ?";
  const { title, desc, cover, id } = req.body;
  const values = [title, desc, cover, id];
  db.query(q, values, (err, result) => {
    if (err) return res.json(err);
    return res.json("the book updated successfull");
  });
});

export default router;
