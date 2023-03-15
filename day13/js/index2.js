function getValue() {
    let value = $('input').val();
    alert(value);
}

function setValue() {
    $('input').val('설정');
}

function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size: 20px; color: red;';
}

function changeCssJquery() {
    $('span').css('font-size', '40px');
    $('span').css('color', 'blue');
    console.log($('span').css('color'));
}

function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}

function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

function changeTextJs() {
    let p = document.querySelector('.p-text');
    p.innerText = '<b>js</b>로 바꿨습니다.'
}

function changeTextJquery() {
    $('.p-text').text('<b>jquery</b>로 바꿨습니다.');
}

function changeHtmlJs() {
    let p = document.querySelector('.p-html');
    p.innerHTML = '<b>js</b>로 바꿨습니다.'
}

function changeHtmlJquery() {
    $('.p-html').html('<b>jquery</b>로 바꿨습니다.');
}

function appendJS() {
    let li = document.createElement('li');
    li.innerText = 'append()로 추가된 js';
    let ul = document.querySelector('.colors');
    ul.append(li);
}

function appendJquery() {
    $('.colors').append('<li>append()로 추가된 jquery</li>')
}

function prependJS() {
    let li = document.createElement('li');
    li.innerText = 'prepend()로 추가된 js';
    let ul = document.querySelector('.colors');
    ul.prepend(li);
}

function prependJquery() {
    $('.colors').prepend('<li>append()로 추가된 jquery</li>')
}

function afterJS() {
    let green = document.querySelector('.green');
    let li = document.createElement('li');
    li.innerText = 'after() 형제요소';

    green.after(li);
}

function afterJquery() {
    $('.green').after('<li>after() 형제요소로 추가된 li</li>')
}

function beforeJS() {
    let green = document.querySelector('.green');
    let li = document.createElement('li');
    li.innerText = 'after() 형제요소';

    green.before(li);
}

function beforeJquery() {
    $('.green').before('<li>after() 형제요소로 추가된 li</li>');
}

function removeJS() {
    let li = document.querySelector('#li2');
    li.remove();
}

function removeJquery() {
    $("#li2").remove();
}

function emptyJS() {
    let nums = document.querySelector('ul.nums');
    nums.innerHTML = '';
}

function emptyJquery() {
    $('ul.nums').empty();
}

function findParent() {
    console.log($('.child2').parent());
}

function findParents() {
    console.log($('.child2').parents());
}

function findNext() {
    console.log($('.child2').next());
}

function findPrev() {
    console.log($('.child2').prev());
}

function findChildren() {
    console.log($('.parent').children());
    console.log(document.querySelector('.parent'))
}

function addClass() {
    $('#hi').addClass('fs-50');
}

function removeClass() {
    // $('#hi').removeClass('fs-50');
    $('#hi').removeClass();
}

function hasClass() {
    console.log($('#hi').hasClass());
}

function toggleClass() {
    $('#hi').toggleClass('bg-pink');
}
