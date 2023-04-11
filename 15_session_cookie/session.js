const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
// dotenv : 환경변수를 파일에 저장해녾고 접근할수 있게 돕는 모듈
const app = express();
const PORT = 7000;

dotenv.config();
console.log(process.env.SECRET_KEY);
// process.env.~~

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'))
app.use('/static', express.static(__dirname + '/static'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({세션모듈옵션})
// - secret : 세션을 발급할 때 사용되는 키 (임의로 변조하는 것을 방지)
// - resave : 세션에 수정사항이 생기지 않더라도 매 요청마다 다시 저장할 건지
// - saveUninitialized : 세션에 저장 할 내역에 없더라도 처음부터 세션 생성할지
// - secure : https 프로토콜에서만 세션을 주고 받을 건지
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))

// 세션 설정 : req.session.키 = 값
// 세션 읽기 : req.session.키
// 세션 삭제 : req.session.destroy(callback)

app.get('/', (req, res) => {
    res.render('session', {
        userid: req.session.userid
    });
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/postUserData', (req, res) => {
    if (req.body.userid == 'banana' && req.body.userpw == '1234') {
        req.session.userid = req.body.userid;
        req.session.userpw = req.body.userpw;
        res.send(true);
    } else {
        res.send(false);
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
    })

    res.end();
})

app.listen(PORT, () => {
    console.log(`run ${PORT}`)
})