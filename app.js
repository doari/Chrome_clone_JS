// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

//object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.

const player = {
name : "tomato",
color : "red",
food : true,
};

console.log(player);

//property를 불러오는 방법은 2가지가 있다.

//1. console.log(player.name); => tomato
//2. console.log(player["name"]); => tomato

//또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
//ex)
const player2 = {
name : "tomato",
color : "red",
food : true,
};

console.log(player2);
player2.color = "blue";
console.log(player2.color);
//--> blue

//그리고 property를 추가 할 수도 있다.

player2.koreanName = "토마토";

//--> {name: "tomato", color: "blue", food: true, koreaName: "토마토"}

