const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // view engine 등록
app.set('/views', express.static(__dirname + '/views'));

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가 !

// localhost:PORT/ 에 접속했을때, index.ejs 를 보여주겠다.
app.get('/', (req, res) => {
    // views의 index.ejs를 찾아서 응답
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`SERVER RUN IN http://localhost:${PORT}`)
})

