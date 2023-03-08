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

console.log(letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2])

// 3차월 배열
let nums = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]

console.log(nums[1][0][1])

// object
let cat = {
    name: '나비',
    age: 1,
    isCute: true,
    mew: function () {
        return '냐옹';
    },
}

let introduce = {
    name: '강민혁',
    age: 24,
    local: 'Daegu'
}

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
console.log(cat['name'])

console.log(`안녕하십니까 저는 ${introduce.name}입니다. 저는 올해 ${introduce.age}살 이고 사는곳은 ${introduce.local}입니다.`)

// typeof
console.log(typeof '문자');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {});
console.log(typeof cat);
console.log(typeof []);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof undefined);

// 실습
console.log(`"${typeof NaN}" isn't "${typeof 'b'}" data type`);
console.log(`typeof 를 boolean 이나 null 에 사용하면, “${typeof cat}” 결과를 얻을 수 있습니다.`)

// 형 변환
// let mathScore = prompt("수학점수를 입력하세요");
// let engScore = prompt("영어점수를 입력하세요");

// let avg = (mathScore + engScore) / 2;

// console.log(avg);

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1);
console.log(typeof str1.toString());

let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1)); // 1
console.log(typeof Number(n2)); // 0
console.log(typeof Number(n3)); // 123.9
console.log(parseInt(n3));

let mathScore = '77';
let engScore = '88';

console.log((parseInt(mathScore) + parseInt(engScore)) / 2)