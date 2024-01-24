# NodeJS, Express, Mysql, Sequelize 가 적용된 프로젝트

- 프로젝트 생성 : `npx express-21c node_910_readbook_v2 --sequelize`
- ORM(Object Relatiton Model, Mapping) 방식의 DBMS 프로젝트
- Data 객체를 먼저 추상화 모델링을 수행한 후 프로젝트를 시작하면  
  자동으로 table 들을 생성하면서 프로젝트가 구동된다.

## Sequelize ORM 프로젝트의 특징

- Model 객체를 잘 선언해 두면, table 을 자동으로 생성할수 있다
- 기본적인 `CRUD`를 실행할때는 SQL을 사용할 필요가 없다
- 복잡한 `SELECT(조회)`를 실행할때는 많은 어려움을 겪을 수 있다.  
  이 경우는 많은 학습과 경험이 필요하다
