const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('form')
})

app.get('/ajax', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.post('/ajaxPost', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get('/axios', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.post('/axios', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get('/axiosGet', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.post('/registerPost', (req, res) => {
    const appId = 'banana'
    const appPw = '4321'
    if (req.body.id == appId && req.body.pw == appPw) {
        res.send({ text: "banana님 로그인 성공 !", color: 'blue' })
    } else if (req.body.id != appId || req.body.pw != appPw) {
        res.send({ text: "아이디 또는 비밀번호 오류", color: 'red' })
    }
})

app.listen(PORT, () => {
    console.log(`APP RUNNING IN http://localhost:${PORT}`)
})