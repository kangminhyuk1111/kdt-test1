const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

app.get('*', (req, res) => {
    res.send("404");
});

app.listen(PORT, () => {
    console.log(`APP RUN IN ${PORT}`)
})