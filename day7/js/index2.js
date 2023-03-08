/* 
    자료형
    기본
    string
    number
    boolean
    null
    undefined

    객체
    Array
    Object
*/

// 1. string
let myName = '길동';
let email = 'gildong@naver.com';
let city = '서울';

console.log(`${myName}`);
console.log(`${email}`);
console.log(`${city}`);

// 문자와 변수를 동시에 출력
console.log(`내 이름은`, myName, `이고 이메일은`, email, `입니다.`);
console.log(`내 이름은` + myName + `이고 이메일은` + email + `입니다.`);

// 템플릿 리터럴
console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다.`);

// number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

// NaN : not a number
console.log('apple' - 3);

// boolean
let checked = true;
let unChecked = false;
console.log(checked);
console.log(unChecked);

// undefined
let undef;
console.log(undef);

// null
let empty = null;
console.log(empty);

// array
let fruits = ['orange', 'pineapple', 'grape', 'apple'];
let fruits2 = new Array('orange', 'pineapple', 'grape', 'apple');

console.log(fruits[0], fruits[1]);

let data = [1, 'kang', false, null, undefined];

console.log(data[4]);

// array : 2차원 배열
let korean = [['가', '나', '다'], ['라', '마', '바'], ['사', '아', '자']];

console.log(korean[0])
console.log(korean[0][0])
console.log(korean[1][1])

let letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];

console.log(letters[3][0]+letters[1][3]+letters[0][1]+letters[0][3]+letters[2][2])

