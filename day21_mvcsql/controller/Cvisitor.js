const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
}

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js >> ', result);
        res.render('visitor', { data: result });
    })

    // before
    // console.log(Visitor.getVisitors());
    // res.render('visitor', { data: Visitor.getVisitors() });
}

// (3) POST /visitor/write
exports.postVisitor = (req, res) => {
    console.log(req.body);

    Visitor.postVisitor(req.body, (result) => {
        console.log('Cvisitor.js >>', result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
        res.send({ id: result.insertId, name: req.body.name, comment: req.body.comment });
    });
};

exports.deleteVisitor = (req, res) => {
    console.log(req.body);

    Visitor.deleteVisitor(req.body.id, (result) => {
        res.send({ id: req.body.id });
    })
}

// exports.patchVisitor = (req, res) => {
//     console.log(req.body)
// }

exports.getVisitor = (req, res) => {
    console.log(req.query.id);
    Visitor.getVisitor(req.query.id, (result) => {
        console.log(result)
        res.send(result);
    })
}

exports.patchVisitor = (req, res) => {
    console.log(">>>>>" + req.body);

    Visitor.patchVisitor(req.body, (result) => {
        res.send("수정 완료")
    })
}