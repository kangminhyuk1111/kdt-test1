const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('get')
})

// Python 스크립트 경로
const pythonScriptPath = './test.py';

app.get('/run-python', (req, res) => {
    let memberNumber = req.query.memberNumber;
    let memberPassword = req.query.memberPassword;
    let dep = req.query.dep;
    let arr = req.query.arr;
    let date = req.query.date;
    let time = req.query.time;
    let zero;

    // Python 프로세스 생성
    const pythonProcess = spawn('python', [pythonScriptPath, memberNumber, memberPassword, dep, arr, date, time]);

    // Python 프로세스에서 stdout, stderr 데이터를 읽을 때마다 실행되는 이벤트 핸들러 등록
    pythonProcess.stdout.once('data', (data) => {
        res.send(data.toString())
        console.log(`stdout: ${data}`)
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data.toString()}`);
    });

    // Python 프로세스 종료 이벤트 핸들러 등록
    pythonProcess.on('close', (code) => {
        console.log(`Python script 종료 코드: ${code}`);
    });
    // res.send('Python 스크립트 실행 중...');
});

app.get('/arrNum', (req, res) => {
    let getArrNum = req.query.arrNum;
    const pythonProcess = spawn('python', [pythonScriptPath, '-c', `from test import reservationSRTrain; print(my_function(${getArrNum}))`]);
    pythonProcess.stdout.on('data', (data) => {
        const result = data.toString();
        res.send(result);
    })
})

app.listen(3000, () => {
    console.log('Express 서버가 3000 포트에서 실행 중입니다.');
});