// 조건문
if (5 > 3) {
    console.log('얍')
}

// let number = Number(prompt('number input'));
// console.log(typeof number);

// if (number > 10) {
//     console.log('이 수는 10보다 큽니다.');
// } else if (number === 10) {
//     console.log('이 수는 10입니다.')
// } else {
//     console.log('이 수는 10보다 작습니다.')
// }

let score = 20;

if (score > 100 || score <= 0) {
    console.log('error!')
} else if (score > 90) {
    console.log('A')
} else if (score > 80) {
    console.log('B')
} else if (score > 70) {
    console.log('C')
} else if (score > 60) {
    console.log('D')
} else {
    console.log('F')
}




// 실습1
let age = 19;
if (age >= 20) {
    console.log('성인')
} else if (age >= 17) {
    console.log('고딩')
} else if (age >= 14) {
    console.log('중딩')
} else if (age >= 8) {
    console.log('초딩')
} else if (age >= 0) {
    console.log('유아')
}

// db
let userId = 'user01';
let userPw = '1234qwer';

function loginUser() {
    let inputId = prompt('id');
    let inputPw = prompt('pw');

    if (userId === inputId) {
        if (userPw === inputPw) {
            alert('로그인 성공 !');
        } else {
            alert('비밀번호가 틀렸습니다 ...');
        }
    } else if (inputId === '') {
        alert('아이디를 입력하지 않았습니다.')
    } else {
        alert('아이디가 틀렸습니다 !')
    }
}

// switch
let a = 4
switch (a) {
    case 1:
        console.log('1');
        break;
    case 4:
        console.log('4');
        break;
}

let sco = 80;
switch (sco / 10) {
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('asdasd')
}

// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

let now = new Date().getHours();
now > 12 ? console.log('오후') : console.log('오전')


// for 
for (let i = 0; i < 10; i++) {
    console.log('안녕', i);
}

for (let i = 0; i < 10; i += 2) {
    console.log(`안녕 ${i}`)
}

for (let i = 0; i < 10; i = i + 3) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log('==============')
for (let i = 5; i > 0; i--) {
    console.log(i)
}
console.log('--------------')

let n = 11;
// 1부터 n까지의 합
let sum = 0;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log(sum);

// 배열과 for문
let fruits = ['사과', '배', '포도', '망고'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; i++) {
    numsSum += numsArr[i];
}
console.log(numsSum);

// 1~20 짝수일 때 합 구하기
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        sum2 += i;
    }
}

console.log(sum2);

// let nums = 10000;
// for (let i = 0; i <= Number(nums); i++) {
//     if (i % 2 == 1 && i % 13 == 0) {
//         console.log(i);
//     };
// }

// for (let i = 2; i <= 9; i++) {
//     console.log(`-----------${i}단------------`);
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// let i = 2;
// let j = 1;

// while (i <= 9) {
//     while (j <= 9) {
//         console.log(`${i}x${j}=${i * j}`)
//         j++;
//     }
//     i++;
//     j = 1;
// }

let n2 = 1;
while (n2 <= 5) {
    console.log(n2);
    n2++;
}

n2 = 10;
while (n2 >= 5) {
    console.log(n2);
    n2--;
}
n2 = 10;
while (n2 >= 1) {
    if (n2 % 2 === 0) {
        console.log(n2);
    }
    n2--;
}

n2 = 1;
while (true) {
    console.log('안녕');
    if (n2 == 10) {
        break;
    }
    n2++;
}

// n2 = 0;
// while (confirm('계속진행?')) {
//     n2++;
//     alert(`${n2}번째 alert창`);
// }

let sum3 = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    sum3 += i;
}

console.log(sum3);











// 실습5
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0 || i % 5 == 0) {
//         sum += i
//     }
// }
// console.log(sum)