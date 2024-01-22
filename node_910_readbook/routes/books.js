import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("books/main");
});

export default router;
