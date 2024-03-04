# Naver open API 를 활용한 도서정보 검색서비스

- naver 에서 제공하는 도서정보 서비스를 활용하여 도서 검색 서비스를 구현해 보자
- `Nodejs+express` 서버가 또 하나의 `client` 역할을 수행하여 사용자의 도서 검색 요청을 naver openAPI 에 전달하고, naver 에서 제공하는 데이터를 다시 가공하여 사용자에게 응답한다
- `NodeJS` 에서 openAPI 를 사용하여기 위하여 과거에는 `axios` 라는 3rd party LIB 를 사용하였으나 최근에는 기본 JS 의 `fetch`만을 사용하여 가능해 졌다.

## Naver open API 사용준비

- `naver 개발자센터`에 개발자 등록하기
- `내 애플리케이션`에 애플리케이션 등록하기
- `Client ID`, `Client Secret` 확인하기
- 프로젝에 `secret` 변수 설정 파일 만들기
- `.gitignore` 에 `secret` 파일 설정하기
- `github` 에 `secret` 파일 업로드 확인하기 : 파일 업로드 안되어야 한다
