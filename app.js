//console.log는 그림의 떡. 꺼내 먹으려면 return필요
//function안에서 return과 추가작업을 입력하면
//return만 작업하고 추가 수행은 이뤄지지 않는다.

const calculator = {
    add: function (a, b) {
    //console.log(a + b);
    return a + b;
    //return에서 반환되므로 return 밑으로 쓰는 코드는 실행 안됨
    },
    
    subtract: function (a, b) {
    //console.log(a - b);
    return a - b;
    },
    
    multiply: function (a, b) {
    //console.log(a * b);
    return a * b;
    },
    
    divide: function (a, b) {
    //console.log(a / b);
    return a / b;
    },
    
    square: function (a, b) {
    //console.log(a ** b);
    return a ** b;
    },
    };
    
    let result = calculator.add(10, 2); //12
    console.log(result);
    result = calculator.subtract(10, 2); //8
    console.log(result);
    result = calculator.multiply(10, 2); //20
    console.log(result);
    result = calculator.divide(10, 2); //5
    console.log(result);
    result = calculator.square(10, 2); //100
    console.log(result);