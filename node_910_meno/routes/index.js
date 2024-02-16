import express from "express";
import moment from "moment";
import DB from "../models/index.js";
import { upLoad } from "../modules/fileUpload.js";
const MEMOS = DB.models.tbl_memos;
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  /**
   * moment 를 사용하여 현재 날짜와 시간을 문자열로 getter
   */
  const toDate = moment().format("YYYY-MM-DD");
  const toTime = moment().format("HH:mm:ss");
  try {
    const rows = await MEMOS.findAll();
    return res.render("index", { MEMOS: rows, toDate, toTime });
  } catch (error) {
    return res.json(error);
  }
  // index.pug 를 rendering 할때 사용하도록 보내주기
  // res.render("index", { toDate, toTime });
});

router.post("/", upLoad.single("m_image"), async (req, res) => {
  console.log(req.body);
  const imageFile = req.file;
  console.log(imageFile);
  try {
    req.body.m_image = imageFile?.filename;
    req.body.m_author = "callor@callor.com";
    await MEMOS.create(req.body);
    return res.redirect("/");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/get_new_date", async (req, res) => {
  const toDate = moment().format("YYYY-MM-DD");
  const toTime = moment().format("HH:mm:ss");
  // JSON 의 변수(key)이름과 value의 이름이 같을때는 한번 생략가능
  // return res.json({ toDate: toDate, toTime: toTime });
  return res.json({ toDate, toTime });
});

export default router;
