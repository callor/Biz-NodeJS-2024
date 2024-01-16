import mysql from "mysql2";

import express from "express";
// express 프레임워크에 있는 Router() 생성자 함수를 사용하여
// router 객체를 만들기
const router = express.Router();

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "schooldb",
  port: "3306",
});

router.get("/", async (req, res) => {
  //   dbConn.connect();
  dbConn.query("SELECT * FROM tbl_student", (err, result, field) => {
    if (err) {
      console.error(err);
      return res.send("DB 연결 Query 오류");
    } else {
      //   return res.json(result);
      return res.render("student/list", { stList: result });
    }
  });
  //   dbConn.end();
});

// localhost:3000/student/insert
router.get("/insert", (req, res) => {
  res.render("student/input");
});

router.post("/insert", (req, res) => {
  // form.post 의 input  에 담긴 데이터를 받아서 배열로 생성
  const params = [
    req.body.st_num,
    req.body.st_name,
    req.body.st_dept,
  ];
  const sql =
    " INSERT INTO " +
    " tbl_student(st_num, st_name, st_dept) " +
    " VALUES(?,?,?) ";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.send("INSERT SQL 오류");
    } else {
      // 리스트 보여주기
      return res.redirect("/student");
    }
  });
});

/**
 * /book/detail?book_code=0003
 * /book/0003/detail
 */

router.get("/:st_num/detail", (req, res) => {
  const st_num = req.params.st_num;
  const sql = " SELECT * FROM tbl_student " + " WHERE st_num = ? ";
  dbConn.query(sql, [st_num], (err, result) => {
    res.json(result);
  });
});

// router 객체를 컴포넌트로 만들어 export 하기
export default router;
