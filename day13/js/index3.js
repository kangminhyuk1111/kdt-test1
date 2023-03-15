console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

$('.p-msg').click(function () {
    $('.p-msg').css('color', 'red');
})

$('.num').on('click', function () {
    $(this).css('color', 'blue');
})

$('.div-hover').hover(
    function () {
        $(this).addClass('hover1');
    }, function () {
        $(this).removeClass('hover1');
    })

$(window).scroll(function () {
    console.log('scroll!')
})

$('.input-key').keydown(function (e) {
    console.log(e.code);
    if (e.code === 'ArrowUp') {
        console.log('up');
    } else if (e.code === 'ArrowRight') {
        console.log('right');
    } else if (e.code === 'ArrowLeft') {
        console.log('left');
    } else if (e.code === 'ArrowDown') {
        console.log('down');
    } else {
        console.log('error');
    }
})