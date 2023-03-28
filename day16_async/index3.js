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
