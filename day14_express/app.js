const express = require('express');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use('/static', express.static(__dirname + '/static'))

app.get('/', function (request, response) {
    response.render('test');
    // response.send('<h1>hello express</h1>');
})

app.get('/login', function (req, res) {
    res.render('login');
})

app.get('/login/register', function (req, res) {
    res.render('register');
})

// request 클라이언트가 서버에게 보내는 요청
// response 서버가 클라이언트에게 보내는 응답

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ${PORT}`);
})