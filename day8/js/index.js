// 함수 function

function helloWorld1() {
    console.log('hello World 1!');
};

function helloWorld2() {
    return 'hello World 2!';
};

helloWorld2();

// return 만나면 함수 종료

function add(num1, num2) {
    return num1 + num2;
};

function add2(num1, num2) {
    console.log(num1 + num2);
};

let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result, result2);

let helloWorld3 = function () {
    console.log('hello world 3!')
}

helloWorld3();

let helloWorld4 = () => {
    console.log('hello World 4!');
};

helloWorld4();

function sayHello1(text) {
    return text;
}
let sayHello11 = (text) => {
    console.log(text)
}

sayHello1()
sayHello11()

console.log(sayHello1('hello World'));

function sayHello2(text, name) {
    return `${text} ${name}`
}

let sayHello22 = (text, name) => {
    console.log(text, name)
}

console.log(sayHello2('hello', 11));
console.log(sayHello22('hello', 22))

// 실습

const multifly = (n1, n2) => {
    return n1 * n2;
}

console.log(multifly(3, 2));

const square = (n) => {
    console.log(n * n);
}

square(2)



