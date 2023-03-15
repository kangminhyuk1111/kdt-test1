let btn1 = document.querySelector('.btn_black');
let btn2 = document.querySelector('.btn_green');
let btn3 = document.querySelector('.btn_blue');
let btn4 = document.querySelector('.btn_red');

console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener('click', () => {
    alert('button1 click !');
})

btn1.addEventListener('mouseover', () => {
    btn1.style.backgroundColor = 'aqua';
})

let container = document.getElementById('container');
console.log(container);

btn2.addEventListener('click', () => {
    let div = document.createElement('div');
    div.style.backgroundColor = 'pink';
    div.innerHTML = 'hi';
    container.append(div);
})

btn3.addEventListener('click', changeColor)

function changeColor() {
    let divs = document.querySelectorAll('#container div');
    for (const el of divs) {
        el.style.backgroundColor = 'skyblue';
    }
    divs[divs.length - 1].style.backgroundColor = 'yellow';
}

btn4.addEventListener('click', changeBtnColor)
function changeBtnColor() {
    let divs = document.querySelector('#container');
}

window.addEventListener('scroll', (event) => {
    let pos = document.querySelector('.pos');
    if (this.scrollY > 700) {
        pos.style.opacity = 1;
    }
})

let input = document.querySelector('.inputs');

input.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowUp') {
        console.log('up');
    } else if (e.code === 'ArrowDown') {
        console.log('down')
    }
})

const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');
console.log(todoForm, todos);

todoForm.addEventListener('submit', (e) => {
    console.log('submit');
    e.preventDefault();

    const todoInput = document.querySelector('input[name="todo"]');
    console.log(todoInput);
    console.log(todoInput.value);

    // input의 문자열 저장
    const todo = todoInput.value.trim();

    if (todo !== '') {
        const newTodo = document.createElement('li');
        newTodo.append(todo);
        todos.append(newTodo);
    }


    todoInput.value = '';

    const chgInput = document.querySelector('#change-input');
    chgInput.addEventListener('change', () => {
        console.log('change!!');
    })

    chgInput.addEventListener('input', () => {
        let div = document.querySelector('.intro');
        div.innerHTML = chgInput.value;
    })
})