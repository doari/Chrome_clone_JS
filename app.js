// listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름, 예를들어 h1 html element mdn을 검색.
// 우리는 javascript의 element를 원하니, 링크에 Web APIs라는 문장이 포함된 페이지를 찾아. 왜냐면 이건 JS관점의 HTML Heading Element란 의미야.
// 너무 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용하면 됨.

const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    title.style.color ="blue";
}
function handleMouseEnter(){
    title.innerText = ("mouse is hear!")
}
function handleMouseLeave(){
    title.innerText = ("mouse is gone!")
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
// 하지만 대부분의 경우에는 style은 CSS를 통해 변경되어야 해.