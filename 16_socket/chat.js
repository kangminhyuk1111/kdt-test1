const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.render('chat');
});

const nickObj = {

};
// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
const updateNickList = () => {
    io.emit('updateNicks', nickObj);
}

io.on('connection', (socket) => {
    // "connection" event
    // - 클라이언트가 접속했을 때 발생하는 이벤트
    // - 콜백으로 socket 객체를 제공

    // 최초 입장시 (연걸)
    // socket.id: 소켓 고유아이디 -> socket은 웹 페이지별로 id생성
    // -> 크롬에서 탭2개 띄우면 socket.id는 각각 생김 (2개)
    socket.emit('userCount', io.engine.clientsCount)

    console.log('⭕ Server Socket Connected >> ', socket.id);

    // 채팅창 입장 안내

    socket.on('setNick', (nickname) => {
        if (Object.values(nickObj).indexOf(nickname) > -1) {
            socket.emit("error", '닉네임이 존재합니다.')
        } else {
            nickObj[socket.id] = nickname;
            io.emit('userComein', `${nickname}님이 입장하셨습니다.`);
            socket.emit('entrySuccess', nickname);
            updateNickList();
            console.log(nickObj);
        }
    })

    socket.on('sendMsg', (msg) => {
        const sendObj = {
            who: nickObj[socket.id],
            msg: msg[0],
            user: nickObj[msg[1]],
        }
        console.log(msg)
        if (msg[1] == 'all') {
            io.emit('getMsg', { who: nickObj[socket.id], msg: msg[0] })
        } else {
            io.to(socket.id).emit('secretMsg', sendObj)
            io.to(msg[1]).emit('secretMsg', sendObj)
        }

    })

    socket.on('disconnect', () => {
        console.log(socket.id + " is out !")
        io.emit('userOut', nickObj[socket.id])
        delete nickObj[`${socket.id}`];
        updateNickList();
    })
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});