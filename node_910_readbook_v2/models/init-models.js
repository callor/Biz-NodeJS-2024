import _tbl_books from "./tbl_books.js";

const initModels = (sequelize) => {
  // 모델 이름 설정
  const tbl_books = _tbl_books(sequelize);

  // 다른 곳에서 model 을 사용할수 있도록 export 준비
  return {
    tbl_books,
  };
};

export default initModels;
