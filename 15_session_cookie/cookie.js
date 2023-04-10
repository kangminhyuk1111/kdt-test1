const express = require('express');
const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'))
app.use('/static', express.static(__dirname + '/static'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookieParser 모듈 불러오기
// : 요청의 쿠키를 해석해서 req,cookies 객체로 만듬
// ex. name=hello 라는 쿠키를 보내면, req.cookies => {name:'hello'}
const cookieParser = require("cookie-parser");
// cookieParser(secretKey, optionObj);
// - secretKey : 비밀키
// - optionObj : 쿠키에서 사용할 옵션 값

// res.cookie(key,value,options)
// : 쿠키 설정

// res.clearCookie(key,value,options)
// : 쿠키 삭제

const cookieConfig = {
    httpOnly: true, // 웹서버를 통해서만 쿠키 접근 가능
    maxAge: 60 * 1000, // 쿠키수명 (ms단위)
    // expires: 만료 날짜 설정
    // secure: https 에서만 쿠키 접근
    // signed: 쿠키 암호화
}

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.cookies.names == 'hideModal') {
        res.render('index', { id: 'good' })
    } else {
        res.render('index', { id: 'no' })
    }
})

app.get('/setCookie', (req, res) => {
    // 쿠키설정
    res.cookie(req.query.name, req.query.val, cookieConfig);
    // 클라이언트에게 응답 보내기
    res.send(req.cookies);
})

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
})

app.get('/clearCookie', (req, res) => {
    // 쿠키 삭제
    // clearCookie할때 res.cookie() 설정했던 key value option 일치해야 함
    // expires maxAge 옵션은 일치하지 않아도 괜찮음.
    res.clearCookie('my first cookie', 'cookie value', cookieConfig);
    // 클라이언트에게 응답 보내기
    res.send('쿠키삭제완료 !')
})

app.listen(PORT, () => {
    console.log(`run ${PORT}`)
})