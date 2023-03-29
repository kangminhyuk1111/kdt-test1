const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // view engine 등록
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extends: true })) // post요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음
// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가 !

// localhost:PORT/ 에 접속했을때, index.ejs 를 보여주겠다.
app.get('/', (req, res) => {
    // views의 index.ejs를 찾아서 응답
    const myTitle = '폼 실습을 합시다 !!';
    res.render('index', { title: myTitle });
})

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {
        title: 'GET 요청 폼 결과 확인하기',
        user: {
            id: req.query.id,
            pw: req.query.pw
        }
    })
})

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', {
        title: 'POST 요청 폼 결과 확인하기',
        user: {
            id: req.body.id,
            pw: req.body.pw
        }
    })
})

app.listen(PORT, () => {
    console.log(`SERVER RUN IN http://localhost:${PORT}`);
})


