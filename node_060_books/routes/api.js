import { getBooks } from "../module/naver_api.js";
import express from "express";
const router = express.Router();

router.get("/get", async (req, res) => {
  const search = req.query.search;

  if (!search) {
    return res.json({ error: "SEARCH NOT FOUND" });
  }
  try {
    const books = await getBooks(search);
    return res.json(books);
  } catch (error) {
    return res.json({ error });
  }
});

export default router;
