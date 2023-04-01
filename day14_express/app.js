const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('get')
})

let pythonProcess;

// Python 스크립트 경로
const pythonScriptPath = './test.py';

app.get('/run-python', (req, res) => {
    let memberNumber = req.query.memberNumber;
    let memberPassword = req.query.memberPassword;
    let dep = req.query.dep;
    let arr = req.query.arr;
    let date = req.query.date;
    let time = req.query.time;
    pythonProcess = spawn('python', ['-u', 'test.py', memberNumber, memberPassword, dep, arr, date, time]);

    // Python 프로세스에서 stdout, stderr 데이터를 읽을 때마다 실행되는 이벤트 핸들러 등록
    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString())
        console.log(`stdout: ${data}`)
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data.toString()}`);
    });


});

app.get('/arrNum', (req, res) => {
    let getArrNum = req.query.arrNum;
    console.log(getArrNum)
    if (pythonProcess) {
        pythonProcess.stdin.write(`reservationSRTrain(${getArrNum})\n`);
        pythonProcess.stdout.once('data', (data) => {
            const result = data.toString();
            console.log(`stdout : ${data}`)
            console.log(`stdout : ${result}`)
        });
    } else {
        console.error('Python process is not running.');
    }
    console.log('err')
});

app.listen(3000, () => {
    console.log('Express 서버가 3000 포트에서 실행 중입니다.');
});