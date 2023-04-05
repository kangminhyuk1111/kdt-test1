const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'codingon'
})

exports.getVisitor = (cb) => {
    // query(sql,callback) => conn에서 저장된 데이터 베이스에 접근해서 sql문 실행
    const sql = `SELECT * FROM visitor;`
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
    })

    console.log('Visitor.js >> ', rows);
    cb(rows);
}

// before
// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가왔다' },
//         { id: 2, name: '이찬혁', comment: '으랏찻차' },
//     ]
// }