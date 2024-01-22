import mysql from "mysql2/promise";
/**
 * DB 접속정보를 다시 설정하고, 이 파일을 mysql.js 로 이름변경 후
 * 프로젝트를 실행할 것
 */
const mysql_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "000000",
  database: "bookdb2",
};

/**
 * 동기식으로 DB 연결 설정하기
 * aync() 로 시작하고
 * 각 실행 함수 앞에 await 를 붙여주면
 * await 로 시작하는 함수가 완료될때까지 blocking 된다.
 */
const dbCreate = {
  init: async () => {
    const connection = await mysql.createConnection(mysql_info);
    return connection;
  },
};
export default dbCreate;
