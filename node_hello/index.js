/*
JS 에서는 변수를 선언하는 키워드가 3가지가 있다
오래된 전통적인 JS 에서는 var 키워드를 사용한다
최신의 JS에서는 var 키워드는 사용하지 말것을 권한다
const, let 키워드를 사용한다
const : 한번 변수에 값을 저장하면 값을 변경할수 없다. 상수형 변수라고 한다
let : 일반적인 변수처럼 값을 수시로 읽고 쓰기가 가능하다

const : 객체, 배열 등을 선언할때
let : 일반적인 숫자, 문자열 변수등을 선언할때

*/
let num1 = 10;
let num2 = 20;
num1 = 100;
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
console.log("반갑습니다");
