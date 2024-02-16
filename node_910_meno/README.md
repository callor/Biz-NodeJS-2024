# Nodejs 이미지 메모장

- 프로젝트 생성 : sequelize 옵션을 추가하여 생성하기
- MySQL Workbench 에서 Schema, Table 생성하기
- 모델생성하기

## sequelize-auto 를 사용하여 model 생성하기

- `sequelize-auto -o ./db -d memoDB -h localhost -u root -x '!Biz8080' -e mysql -l esm`

## 날짜 시간을 사용하기 위하여 moment 설치하기

- `npm install moment`

## 파일업로드를 위한 multer 설치하기

- `npm install multer`
- 파일 업로드 해킹 방지 도구 설치 : `npm install uuid`
