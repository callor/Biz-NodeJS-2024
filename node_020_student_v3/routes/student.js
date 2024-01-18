/**
 * express 프레임워크를 사용하여
 * router 객체 생성
 */
import express from "express";
/**
 * mysql.js 에서 선언하고 export 한 dbCreate 를
 * import DB 라는 이름으로 사용하겠다
 */
import DB from "../config/mysql.js";
const router = express.Router();
// dbCreate 에서 선언된 init() 함수를 호출하여
// return 된 정보를 dbConn 변수(객체)에 저장하라
const dbConn = DB.init();

// localhost:3000/student/
router.get("/", (req, res) => {
  // 문자열을 아무런 가공, 디자인 없이 그대로 client 에서 응답하기
  // res.send("누군가 나를 호출(req) 했네");
  const sql = "SELECT * FROM tbl_student";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("student/list", { stList: result });
    }
  });
});

// localhost:3000/student/insert
// GET: localhost:3000/student/insert
router.get("/insert", (req, res) => {
  res.render("student/input.pug");
});

// POST: localhost:3000/student/insert
router.post("/insert", (req, res) => {
  // form 을 통해 전달된(전송된) 데이터를 (임시)변수에 저장해 두기
  const st_num = req.body.st_num;
  const st_name = req.body.st_name;
  const st_dept = req.body.st_dept;

  // DB에 insert 하기 위해 배열type 으로 변환
  // const params = [req.body.st_num, req.body.st_name, req.body.st_dept]
  const params = [st_num, st_name, st_dept];
  const sql =
    " INSERT INTO tbl_student(st_num, st_name, st_dept) " +
    " VALUES( ?,?,? )";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // INSERT(추가)가 성공한 경우 List 를 보여주는 화면으로
      // 화면 전환하라
      return res.redirect("/student/");
    }
  });
});

// GET: localhost:3000/student/이몽룡/detail
// GET: localhost:3000/student/홍길동/detail
// GET: localhost:3000/student/학번/detail 요청을 하면
// 주소 중간에 끼워넣어진 학번을 st_num 변수를 통하여 받아라
router.get("/:st_num/detail", (req, res) => {
  // 주소에 포함되어 전달된 값을 변수에 저장학
  const st_num = req.params.st_num;
  console.log(st_num);
  const params = [st_num];
  const sql = " SELECT * FROM tbl_student WHERE st_num = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("student/detail", { STD: result[0] });
    }
  });
});

router.get("/:st_num/check", (req, res) => {
  const st_num = req.params.st_num;
  const sql = " SELECT st_num FROM tbl_student WHERE st_num = ? ";
  dbConn.query(sql, [st_num], (err, result) => {
    if (err) {
      return res.json({ result: "ERROR", message: err });
    } else {
      if (result.length > 0) {
        return res.json({ result: "있다", STD: result[0] });
      } else {
        return res.json({ result: "없다", STD: null });
      }
    }
  });
});

router.get("/:st_num/delete", (req, res) => {
  const st_num = req.params.st_num;
  const sql = " DELETE FROM tbl_student WHERE st_num = ? ";
  dbConn.query(sql, [st_num], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/student/");
    }
  });
});

// localhost:3000/student/학번/update
// form tag 의 action 이 자동으로 URL 이 설정된다
router.get("/:st_num/update", (req, res) => {
  const st_num = req.params.st_num;
  const sql = " SELECT * FROM tbl_student WHERE st_num = ? ";
  dbConn.query(sql, [st_num], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("student/input", { STD: result[0] });
    }
  });
});

router.post("/:st_num/update", (req, res) => {
  const st_num = req.params.st_num;
  const st_name = req.body.st_name;
  const st_dept = req.body.st_dept;
  const st_grade = req.body.st_grade;
  const st_tel = req.body.st_tel;
  const st_addr = req.body.st_addr;

  const params = [
    st_name,
    st_dept,
    st_grade,
    st_tel,
    st_addr,
    st_num,
  ];
  const sql =
    " UPDATE tbl_student " +
    " SET st_name = ?, " +
    "   st_dept = ?, " +
    "   st_grade = ?, " +
    "   st_tel = ?, " +
    "   st_addr = ? " +
    " WHERE st_num = ? ";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect(`/student/${st_num}/detail`);
    }
  });
});

// router 객체를 다른곳에서 import 할수 있도록 export 하기
export default router;
