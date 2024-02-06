/**
 * express generator ES6+ Template
 * @author : callor@callor.com
 * @since : 2020-12-10
 * @update : 2024-01-19
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */

// essential modules
import express from "express";
import createError from "http-errors";
import path from "path";
import helmet from "helmet";
// session 도구 import
import session from "express-session";

// 3rd party lib modules
import cookieParser from "cookie-parser";
import logger from "morgan";

// MySQL Sequelize
import DB from "../models/index.js";

// import router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import iolistRouter from "../routes/iolist.js";
import productRouter from "../routes/product.js";

// create express framework
const app = express();

// helmet security module
app.use(helmet());

// MySQL DB 연결
// 주의!!! force 를 true 로 하면 기존의 Table 을 모두 DROP 한 후 재생성 한다
DB.sequelize.sync({ force: false }).then((dbConn) => {
  console.log(
    dbConn.options.host,
    dbConn.config.database,
    "DB Connection OK"
  );
});

// Disable the fingerprinting of this web technology.
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "pug");

// middleWare enable
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("public")));

// session를 사용하기 위한 설정
// cookieParser() 설정 이후에 위치
app.use(
  session({
    key: "callor", // 식별자, 브라우저에 저장될 cookie 이름
    secret: "callor@callor.com", // SessionID 암호화용 키
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 유효시간
    },
  })
);
// 로그인을 하지 않아도 될 곳(회원인증)
app.use("/users", usersRouter);

/**
 * 모든 요청 http://localhost:3000/* 로 요청한 것들
 * 어떤 특정 요청에 대한 rounting 을 실행하는 것이 아니다
 * 모든 요청에 대하여 공통으로 어떤 명령을 실행 하고 싶을때
 * 사용하는 router 이다
 * 이 router 코드의 끝에는 반드시 next() 함수를 실행해 주어야 한다
 * 그렇지 않으면 다른 router 들이 전혀 실행되지 않는다
 */
app.use((req, res, next) => {
  res.locals = req.session;
  next();
});

// router link enable, link connection
app.use("/", indexRouter);
app.use("/iolist", iolistRouter);
app.use("/products", productRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
