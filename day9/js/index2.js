// let arr = [];

// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
// }

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);
// sum = 0;

// for (const nums of arr) {
//     sum += nums;
// }

// console.log(sum);
// sum = 0;

// arr.forEach((element) => {
//     sum += element;
// })

// console.log(sum);

// // ===========================================

// let fruit1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
// let fruit2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
// let same = [];

// for (let i = 0; i < fruit1.length; i++) {
//     if (fruit1.includes(fruit2[i])) {
//         same.push(fruit2[i]);
//     }
// }

// // console.log(fruit1.concat(fruit2));
// // console.log(fruit1.filter((item, pos) => fruit1.indexOf(item) === pos));
// // console.log(fruit2);

// let diff = fruit1.filter(element => !fruit2.includes(element));

// console.log(diff);

// // js내장 객체
// // 자바스크립트가 기본적으로 가지고 있는 객체

// // Date : 시간 날짜에 대한 정보를 얻기위해 사용

// let now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getHours());
// console.log(now.getDay());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDay());

let now = new Date();
let date = now.getDay();
if (date === 0 || date === 6) {
    console.log("주말");
} else {
    console.log("평일");
}

// Math객체
// 속성

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

// 메소드
console.log(Math.min(40, 41, 42, 43, 44, 45));
console.log(Math.max(40, 41, 42, 43, 44, 45));

console.log(parseInt(Math.random() * 100) + 1);

// round 반올림
// floor 내림
// ceil 올림