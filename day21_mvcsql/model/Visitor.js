const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
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
        console.log('Visitor.js >> ', rows);
        cb(rows);
    })
}

exports.postVisitor = (data, callback) => {
    console.log(data); // controller에서 넘겨주고 있는 클라이언트에서 보내주는 폼 값 (req.body)

    const sql = `insert into visitor(name, comment) values('${data.name}', '${data.comment}');`
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        console.log('Visitor.js: ', rows);
        callback(rows);
    })
}

exports.deleteVisitor = (data, callback) => {
    console.log(data);
    const sql = `delete from visitor where id = ${data.idx}`;

    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        console.log(rows);
        callback(rows);
    })
}
// before
// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가왔다' },
//         { id: 2, name: '이찬혁', comment: '으랏찻차' },
//     ]
// }