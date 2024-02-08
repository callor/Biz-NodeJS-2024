CREATE DATABASE frigdeDB;
USE frigdeDB;
CREATE TABLE tbl_product (
  p_seq int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  p_fseq int NOT NULL,
  p_name varchar(125) NOT NULL,
  p_exdate varchar(12) NOT NULL,
  p_quan int NOT NULL,
  p_date varchar(12) NOT NULL,
  p_memo varchar(125) DEFAULT NULL
);
-- 오늘날짜에서 10일전부터 임의 날짜에 상품구매
-- 유통기간 : 구입일로 부터 5 ~ 15 범위의
-- 임의의 날짜로 생성
SELECT COUNT(*) FROM tbl_product;
SELECT * FROm tbl_product;


