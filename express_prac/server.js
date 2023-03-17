const express = require('express');
const app = express();
const PORT = 5050;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use('/a', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('main')
    // res.send('hello express !!');
})

app.get('/aside', (req, res) => {
    res.render('aside');
})

app.get('/aside/login', (req, res) => {
    res.render('login');
})

app.get('/aside/signup', (req, res) => {
    res.render('signup');
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ${PORT} !`);
})