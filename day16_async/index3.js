/*
function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = name;
            console.log(result)
            resolve(result)
        }, 1000)
    })

}

function back(txt) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(txt)
            resolve(txt)
        }, 1000)
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("여기는 callback hell")
        }, 1000)
    })
}

call('kim')
    .then(function (name) {
        console.log(name + " 반가워")
        return back('back');
    })
    .then(function (txt) {
        console.log(txt + "을 실행했구나")
        return hell()
    })
 */


/* 
let body = document.querySelector('body');

function bgred() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('red');
        }, 1000)
    })
}

function bgorange() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('orange');
        }, 1000)
    })
}

function bgyellow() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('yellow');
        }, 1000)
    })
}

function bgblue() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('blue');
        }, 1000)
    })
}

function bggreen() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('green')
        }, 1000)
    })
}

bgred()
    .then(function (result) {
        body.style.backgroundColor = result;
        return bgorange();
    })
    .then(function (result) {
        body.style.backgroundColor = result;
        return bgyellow();
    })
    .then(function (result) {
        body.style.backgroundColor = result;
        return bggreen();
    })
    .then(function (result) {
        body.style.backgroundColor = result;
        return bgblue();
    })
    .then(function (result) {
        body.style.backgroundColor = result;
    })
*/

/*
const changeBgColor = (newColor) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            res();
        }, 1000);
    })
}

changeBgColor('red')
    .then(() => {
        return changeBgColor('orange');
    })
    .then(() => {
        return changeBgColor('yellow');
    })
    .then(() => {
        return changeBgColor('green');
    })
    .then(() => {
        return changeBgColor('blue');
    })

    */

// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
/*
function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name); // 작업 성공시 then(name)
        }, 1000);
    });
}

function back(back) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('back');
            resolve('back'); // 작업 성공시 then('back')
        }, 1000);
    });
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    });
}
async function exec() {
    let user = await call("kim");
    console.log(`${user} 반가워`);
    let txt = await back();
    console.log(`${txt} 를 실행했구나`);
    let message = await hell();
    console.log("여기는 " + message);
}
exec(); */

const changeBgColor = (newColor) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            res();
        }, 1000);
    })
}

async function exec() {
    await changeBgColor('red');
    await changeBgColor('yellow');
    await changeBgColor('green');
    await changeBgColor('blue');
    await changeBgColor('orange');
}

exec();