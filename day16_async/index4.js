// async await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

// 구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 method 앞에 await 키워드 붙이기 (해당 작업을 기다려 줄 것)
/*
async function hello() {
    await method();
}
 */

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            const fruits = ['😢', '🤔', '🙌'];
            // res(fruits);
            // rej(new Error('알 수 없는 에러 발생 !!'));
        }, 1000);
    })
}

//  promise then() 사용시
// fetchFruits().then((fruits) => {
//     console.log(fruits);
// }).catch((error) => {
//     console.log(error)
// })

// async await 사용시
// try catch 구문

// try {
//     // 코드실행
//     // 에러 실행시 catch로 이동
// } catch (error) {
//     // 에러 관리
// }
// // try 블록 코드가 실행
// // try 블록에서 no error > catch 건너뜀
// // try 블록에서 error > try 실행 중단 > catch 실행


// async function printItems() {
//     const fruits = await fetchFruits();
//     try {
//         console.log(fruits)
//     } catch (error) {
//         console.log(error)
//     }
// }

// printItems();


function goMart() {
    console.log('마트에 가서 어떤 음료 살지 고민!');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝~!');
            product = '제로 콜라';
            price = 3000;
            resolve();
        }, 1000);
    })
}

function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

function nopay() {
    console.log(`금액 부족`);
}

async function exec() {
    goMart();
    await pickDrink();
    pay();
}

let product; // undefined
let price; // undefined
exec();