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
  const q = "INSERT INTO books (`title`,`desc`,`cover`,price) VALUES (?,?,?,?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created");
  });
});
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const q = "delete from books where id=? ";
  db.query(q, [id], (err, result) => {
    if (err) return res.json(err);
    return res.json("the book deleted successfull");
  });
});
router.put("/update", (req, res) => {
  const q =
    "UPDATE books SET title = ?, `desc` = ?, cover = ? , price=? WHERE id = ?";
  const { title, desc, cover, price, id } = req.body;
  const values = [title, desc, cover, price, id];
  db.query(q, values, (err, result) => {
    if (err) return res.json(err);
    return res.json("the book updated successfull");
  });
});

export default router;
