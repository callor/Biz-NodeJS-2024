import express from "express";
import { getBooks } from "../module/naver_api.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const search = req.query.search;
  try {
    const books = await getBooks(search);
    // return res.json(books);
    return res.render("naver", { BOOKS: books });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/detail/:isbn", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const book = await getBooks(isbn);
    // return res.json(book[0]);
    return res.render("naver_detail", { BOOK: book[0] });
  } catch (error) {
    console.log(error);
  }
});

export default router;
