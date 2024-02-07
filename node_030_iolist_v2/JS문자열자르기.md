# JS 에서 문자열 자르기

- 프로그래밍 언어마다 저마다의 문자열 자르기 함수, method 가 있다
- JS 에는 `substring(), stbstr(), slice()` 의 함수가 있다.
- 일반적인 문자열에서 문자열을 자르는 함수는 `자르기(시작index, 길이)` 형식이 많다
- `Java`, `JavaScript` 에는 `substring()` 함수가 있는데 이 함수의 용법이 다른 언어의 용법과 다르다.
- `ABCDE.substring(2,3)` 라는 코드는 ABCDE 문자열에서 0번부터 2번 앞의 문자열을 잘라내고, 3번 이후의 문자열을 잘라낸 `C` 문자열만 추출한다.
- `JavaScript` 에서는 만약 `subtring(3,2)` 와 같이 코드를 작성하면 `substring(2,3)`으로 변경하여 코드가 실행된다.
- 다소 불편한 코드 실행방식 때문에 `JavaScript` 에는 `substr()`이라는 별도의 함수가 있다
- `substr(위치, 길이)` 함수는 `ABCDE.substr(3,2)` 라는 코드는 3번 index 위치 부터 2글자를 추출하는 코드가 실행된다
