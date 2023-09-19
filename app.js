// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// - 첫번째 element만 가져옴
// - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다/

const title = document.querySelector("#hello");
const title = document.getElementById("hello");


console.log(title);

