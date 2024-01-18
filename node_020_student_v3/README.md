# URL, URI

- URL : Uniform Resouce Location, 통합 자원 지시자, 통합 자원 위치  
  https://naver.com/news 처럼 요청하는 것
- URI : Uniform Resouce Identifier, 통합 자원 식별자  
  https://naver.com/news?id=1001 처럼 요청하는 것  
  https://naver.com/news/1001/detail 처럼 요청하는 것, 이때 1001 은 id 값
- URN : Uniform Resouce Name, 통합 자원 이름

# Ajax(Async. JavaScrip and XML) 기술

- Web 은 현재 화면에서 `a link` 를 클릭하거나, JS 에서 `document.location.href` 를 실행하건나, 또는 Browser 의 주소창에 URL 입력하여 서버에게 요청(request)을 보낸다.
- 요청을 받은 서버는 새로운 화면에 표현할 정보를 `HTML` 코드로 만들어 client 에서 응답(Response) 한다.
- 이 과정에서 기존의 화면은 뒤로 사라지고 새로운 화면에 보여지게 된다.
- 현재 화면에서 `새로고침(F5)`을 하는 경우에도 주소창에의 URL 을 서버에서 다시 요청하고, 새로운 화면을 받아 보여지는 것이다.
- 이 과정에서 만약 input box 등에 어떤 값이 입력되어 있다면, 그 값이 서버로 전송되기도 하고, 입력중인 내용이 모두 clear 된다.
- 현재 화면을 그대로 유지하면서 어떤 정보를 서버로 부터 요청해야 하는 경우가 있다. 그래서 탄생한 기술이 AJax 기술이다.
- 표준 JS 에서는 기술을 사용할수 있는 함수가 `fetch()` 라는 함수로 구현되어 있다.

## fetch(URL)

- `fetch(URL)` 함수는 Background 에서 비동기 방식으로 서버에 URL 을 보내서 결과를 수신한 후 화면의 일부를 변경하거나, 어떤 변수의 값을 변경한다

# DB CRUD 중 Update 구현

- 기존의 데이터의 일부 항목을 수정하기, 변경하기

## 절차

1. 어떤 데이터를 수정할 것인가 : `detail` 화면에 보이는 데이터
2. 수정할 데이터를 서버에 요청, 서버에서는 수정할 데이터를 input 에 보이도록 응답.
3. input 화면에서 변경할 데이터를 입력
4. 저장(수정) 을 클릭하면 서버에서 Update 실행
