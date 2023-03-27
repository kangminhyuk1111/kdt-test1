// Promise
// 비동기 함수를 동기처리하기 위해 만든 객체
// 성공, 실패를 분리해서 반환

// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패
// 프로미스는 콜백함수를 전달할 필요가 없음. 그냥 호출하면 됨 !

// 프로미스 생성
// promise 함수의 return 값이 Promise 객체
// resolve() : 성공시 실행, 프로미스 사용시 then 매서드와 연결
// reject() : 실패한 경우, 프로미스 사용시 catch 매서드와 연결
// flag : true false

/*
function promise1(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(`promise상태는 fulfilled!! then으로 연결됩니다. 이 때의 flag는 ${flag} 입니다.`)
        } else {
            reject(`promise상태는 rejected!! catch로 연결됩니다. 이 때의 flag는 ${flag} 입니다.`)
        }
    });
}

// 프로미스 사용(소비)하는 코드
promise1(true)
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error)
    })


function goMart() {
    console.log('마트에 가서 어떤 음료 살지 고민!');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝~!');
            product = '제로 콜라';
            price = 3000;
            if (price <= 2000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    })
}

function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

function nopay() {
    console.log(`금액 부족`);
}

let product; // undefined
let price; // undefined
goMart();
pickDrink().then(pay).catch(nopay);
*/

// Promise 체이닝
// ex 함수를 이용해 (4+3)*2-1=13 연산을 해보자
// 1. add(4,3)
// 2. mul(add(4,3),2)
// 3. sub(mul(add(4,3),2),1)
// add mul sub 순으로 연산

// step1 콜백함수로 해결하기
/*
function add(n1, n2, callback) {
    setTimeout(function () {
        let result = n1 + n2;
        callback(result)
    }, 1000)
}

function mul(n, callback) {
    setTimeout(function () {
        let result = n * 2;
        callback(result);
    }, 700)
}

function sub(n, callback) {
    setTimeout(function () {
        let result = n - 1;
        callback(result)
    }, 500)
}

add(4, 3, function (x) {
    console.log('1: ', x);
    mul(x, function (y) {
        console.log('2: ', y);
        sub(y, function (z) {
            console.log('3: ', z);
        })
    })
})
*/

// promise 체이닝 이용
// 장점1. then 메서드 연속 사용 가능 ! -> 순차적인 작업 가능
// 장점2. 에러처리가 쉽고 간단
// -> catch 구문에서 한번에 에러처리 가능

function add(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result)
        }, 1000)
    })
}

function mul(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = n * 2;
            resolve(result)
        }, 700)
    })
}

function sub(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = n - 1;
            if (result > 20) {
                console.log(result + " great!!!")
            } else {
                reject(new Error("걍 에러 띄워봄"));
            }
        }, 500)
    })
}

// promise 체이닝
add(4, 100)
    .then(function (result) {
        console.log(result)
        return mul(result)
    })
    .then(function (result) {
        console.log(result)
        return sub(result)
    })
    .then(function (result) {
        console.log(result)
    })