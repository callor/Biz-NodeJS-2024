import express from "express";
import DB from "../models/index.js";
const IOLIST = DB.models.tbl_iolist;
const DEPTS = DB.models.tbl_depts;
const PRODUCTS = DB.models.tbl_products;
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rows = await IOLIST.findAll({
      include: [
        { model: PRODUCTS, as: "IO_상품" },
        { model: DEPTS, as: "IO_거래처" },
      ],
    });
    // return res.json(rows);
    return res.render("iolist/list", { IOLIST: rows });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/insert", (req, res) => {
  const user = req.session?.user;
  if (user) {
    return res.render("iolist/input");
  } else {
    const message = "로그인이 필요한 서비스 입니다";
    return res.redirect(`/users/login?fail=${message}`);
  }
});

export default router;
