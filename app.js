//player.points(); 라고 사용하지 않았다. player.points은 function이 아니기 때문. player.points은 숫자다.
//player에게 function을 주기 전에, 어떻게 function을 만드는지를 배워야 한다.
//function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다. 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

//function 선언 :
//function 함수명() {
//실행코드
//}

//funtion 실행 : 함수명();
//argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.

function sayHello(){
    console.log("Hello my name is C")

}

//alert();
//console.log("hello");
sayHello("Min");
sayHello("Lee");
sayHello("Kim");