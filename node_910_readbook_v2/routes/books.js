import express from "express";
import DB from "../models/index.js";

const router = express.Router();
const BOOK = DB.models.tbl_books;

router.get("/", async (req, res) => {
  try {
    const rows = await BOOK.findAll();
    return res.render("books/list", { books: rows });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/insert", async (req, res) => {
  // 각 요소의 값이 defaultValue 로 채워진 Data 객체 만들기
  // const book_data = new BOOK();
  const book_data = await BOOK.build();
  return res.render("books/input", { book: book_data });
});

router.post("/insert", async (req, res) => {
  const book_data = req.body;
  try {
    await BOOK.create(book_data);
    return res.redirect("/books");
  } catch (error) {
    return res.json(error);
  }
});
router.get("/:isbn/detail", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const row = await BOOK.findByPk(isbn);
    return res.render("books/detail1", { book: row });
  } catch (error) {
    return res.json(error);
  }
});
router.get("/:isbn/update", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const row = await BOOK.findByPk(isbn);
    return res.render("books/input", { book: row });
  } catch (error) {
    return res.json(error);
  }
});

router.post("/:isbn/update", async (req, res) => {
  const book_data = req.body;
  const isbn = req.params.isbn;
  try {
    await BOOK.update(book_data, {
      where: { isbn: isnb },
    });
    return res.redirect(`/books/${isbn}/detail`);
  } catch (error) {}
});

router.get("/:isbn/delete", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    await BOOK.destroy({ where: { isbn } });
    return res.redirect("/books");
  } catch (error) {
    return res.json(error);
  }
});

export default router;
