const models = require('../models')

exports.getTodos = async (req, res) => {
    const result = await models.Todo.findAll({
        order: [['id', 'DESC']]
    });
    res.send(result);
}

exports.createTodo = async (req, res) => {
    const result = await models.Todo.create({
        title: req.body.title,
        done: 0,
    })
    res.send(result);
}

exports.patchTodo = async (req, res) => {
    console.log(req.body)
    await models.Todo.update({
        title: req.body.title
    }, {
        where: {
            id: req.body.id
        }
    })
    const result = await models.Todo.findOne({
        where: {
            id: req.body.id
        }
    })
    res.send(result);
}

exports.deleteTodo = async (req, res) => {
    await models.Todo.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send(true);
}

