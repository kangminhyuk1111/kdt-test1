// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();
let myNick;
const chatList = document.querySelector('#chat-list');
const chatBox = document.querySelector(".chat-box");

const userData = async () => {
    const result = await axios({
        method: 'POST',
        url: '/userData',
        data: { data: 1 },
    })
    console.log(result);
}

socket.on('connect', () => {
    console.log('⭕️ Client Socket Connected >> ', socket.id);
});

socket.on('userCount', (count) => {
    console.log(count)
    document.querySelector('#user-count').textContent = `${count}명 접속중 !`
})

socket.on('userComein', (data) => {
    console.log(data)
    chatList.insertAdjacentHTML('beforeend', `<p id="user-count">${data}</p>`);
})

socket.on('entrySuccess', (nickname) => {
    myNick = nickname;
    document.querySelector('.chat-box').classList.remove('d-none');
    document.querySelector('#nickname').disabled = true;
    document.querySelector('.entry-box > button').disabled = true;
})

socket.on('updateNicks', (obj) => {
    let nickList = document.querySelector('#nick-list');
    let options = `<option value="all">전체</option>`;
    for (let key in obj) {
        options += `<option value="${key}">${obj[key]}</option>`;
    }
    document.querySelector('#nick-list').innerHTML = options;
})

socket.on('getMsg', (data) => {
    chatList.scrollTop = chatList.scrollHeight
    if (myNick == data.who) {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.setAttribute("class", 'my-chat');
        div2.innerHTML = `${data.who} : ${data.msg}`
        div1.append(div2)
        chatList.append(div1);
    } else if (myNick != data.who) {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.setAttribute("class", 'other-chat');
        div2.innerHTML = `${data.who} : ${data.msg}`
        div1.append(div2)
        chatList.append(div1);
    }

})

socket.on('secretMsg', (data) => {
    chatList.scrollTop = chatList.scrollHeight
    if (myNick == data.who) {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.setAttribute("class", 'my-chat');
        div2.innerHTML = `${data.user}에게 : ${data.msg}`
        div2.setAttribute("id", "bg-purple");
        div1.append(div2)
        chatList.append(div1);
    } else {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.setAttribute("class", 'other-chat');
        div2.innerHTML = `(귓속말) ${data.who} : ${data.msg}`
        div2.setAttribute("id", 'bg-purple');
        div1.append(div2)
        chatList.append(div1);
    }

})

socket.on('error', (data) => {
    alert('닉네임 에러 !')
})

socket.on('userOut', (data) => {
    if (data == undefined) {
        return;
    }
    const p = document.createElement('p');
    p.setAttribute('id', 'user-count');
    p.innerHTML = `${data}님이 퇴장하였습니다.`;
    chatList.append(p);
})

function entry() {
    socket.emit('setNick', document.querySelector('#nickname').value);
}

function sendMsg() {
    console.log(document.querySelector('#nick-list').value)
    console.log(document.querySelector('#message').value)
    socket.emit('sendMsg', ([document.querySelector('#message').value, document.querySelector('#nick-list').value]));
}

// function sayHello() {
//     // client -> server 정보 보내기
//     // socket.emit(event, data): 데이터 "전송"
//     // => event 라는 이름으로 data를 전송
//     socket.emit('hello', {
//         who: 'client',
//         msg: 'hello',
//     })

//     socket.on('helloKR', (data) => {
//         const div1 = document.createElement('div');
//         const div2 = document.createElement('div');
//         div1.setAttribute("class", 'my-chat');
//         div2.innerHTML = `${data.who} : ${data.msg}`
//         div1.append(div2)
//         chatList.append(div1);
//     })


//     // socket.on(event, callback) : 데이터 "받음"
//     // event에 대해서 정보를 받아 callback함수 실행
// }

// function sayStudy() {
//     socket.emit('study', {
//         who: 'student',
//         msg: 'study !!'
//     })
// }

// function sayBye() {
//     socket.emit('bye', {
//         who: 'kim',
//         msg: 'bye..',
//     })

//     socket.on('otherUser', (data) => {
//         const chatList = document.querySelector('#chat-list');
//         const div1 = document.createElement('div');
//         const div2 = document.createElement('div');
//         div1.setAttribute("class", 'other-chat');
//         div2.innerHTML = `${data.who} : ${data.msg}`
//         div1.append(div2)
//         chatList.append(div1);
//     })
// }