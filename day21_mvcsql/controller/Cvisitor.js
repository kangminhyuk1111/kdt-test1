const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
}

exports.getVisitors = (req, res) => {
    Visitor.getVisitor((result) => {
        console.log('Cvisitor.js >> ', result);
        res.render('visitor', { data: result });
    })

    // before
    // console.log(Visitor.getVisitors());
    // res.render('visitor', { data: Visitor.getVisitors() });
}