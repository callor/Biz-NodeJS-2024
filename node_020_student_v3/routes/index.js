import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", {
    title: "나의 홈페이지 with callor@callor.com",
  });
});

export default router;
