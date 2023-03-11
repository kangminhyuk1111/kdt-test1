let str1 = 'Strawberry Moon';
let str2 = '      Strawberry Moon';

console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[12] + str1[14]);
console.log(str1.length);
console.log(str2.length);

let msg = 'Happy Birthday!';
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str1.trim());
console.log(str1.trim().length);

let msg2 = '    hello world!    ';
console.log(msg2.trim().toUpperCase());

let fruit = 'applemango';
console.log(fruit.indexOf('a'));
console.log(fruit.indexOf('apple'));
console.log(fruit.indexOf('x'));

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

let msg3 = 'Wow! It is so amazing!!';
console.log(msg3.replace('Wow', 'Hey'));
console.log(msg3.replaceAll('o', 'a'));

let date = '23.03.10';
console.log(date.split('.'));

// =====================================================================
// 배열

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'rabbit', 'puppy', 'hamster'];
arr1[5] = 6;
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1.pop());
console.log(arr1);

console.log(arr2);
console.log(arr2);

console.log(arr2.includes('quakka'));
console.log(arr2.indexOf('quakka'));

console.log(arr1.reverse());
console.log(arr1);

str1 = arr1.join();
console.log(str1);

let arr3 = [1, 3, 4, 5, 6];
let alphabet = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
    console.log(alphabet[i])
}

for (let num of arr3) {
    console.log(num)
}

arr3.forEach(function (data, idx, arr) {
    console.log(data, idx, arr);
})

arr3 = arr3.filter((data) => {
    return data > 3;
})

console.log(arr3);

arr2 = arr2.filter((data) => {
    return data.length >= 6;
})

console.log(arr2);

// map, find
let arr4 = [1, 2, 3].map((data) => {
    return data * 3;
})

console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((data) => {
    return data * 4;
})

console.log(arr4);










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