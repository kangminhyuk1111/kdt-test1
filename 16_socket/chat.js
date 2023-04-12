const express = require('express');
const app = express();
const PORT = 6000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'))
app.use('/static', express.static(__dirname + '/static'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('chat');
})

app.listen(PORT, () => {
    console.log(`run ${PORT}`);
})