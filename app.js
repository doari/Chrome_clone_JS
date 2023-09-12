let과 const의 차이는 let은 업데이트를 할 수 있다는 것이다. let을 업데이트 할 땐 다시 let을 붙이지 않아도 됨.
ex) 기존 변수의 값을 업뎃하고 싶은 경우
let a = 5; // 기존의 값이 5인 상태
a = 10; // let을 생략하고 10으로 업데이트했음.

코드를 읽으면서 의미를 부여하기 위해 항상 const, 가끔 let ,사용하지 말아야할 var.

boolean은 딱 두 가지 옵션만 있다. ture, false.

null은 아예 '비어있음을 정의'해버리는것, undefinde는 변수에 값을 부여하지 않은 상태.

array 만들기
ex)
const days = [1, 2, "안녕하세요" , 'abc' , false , null]
호출시에는 ? console.log(days[2]) // 인덱스 2번인 "안녕하세요"가 로그에 출력될 예정

array에 무언갈 업데이트 하고 싶을 때에 직접 변경하기.
ex)
days[2] = "water" // 데이라는 변수의 오브젝트 인덱스 2번인 "안녕하세요"를 "water"로 교체한다는 뜻.

.push() 로는 추가를 할 수 있음.
ex)
days.push('생선') // days라는 변수에 '생선'이라는 string 값을 추가해준것.

const의 object 값을 변경하는 행위는 const 자체를 변경하는 것이 아니고 objects값을 변경하는 것이기 때문에 재할당 오류와 관계없다.