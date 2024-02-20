USE ecountDB;
DESC tbl_iolist;
-- 칼럼추가
ALTER TABLE tbl_iolist
ADD COLUMN io_delete int;
