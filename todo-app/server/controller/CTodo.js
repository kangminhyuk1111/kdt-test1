const models = require('../models')

exports.getTodos = async (req, res) => {
    const result = await models.Todo.findAll();
    res.send(result);
}

exports.createTodo = async (req, res) => {
    const result = await models.Todo.create({
        title: req.body.title,
        done: req.body.done,
    })
    res.send(result);
}

exports.patchTodo = async (req, res) => {
    await models.Todo.update({
        title: 'test'
    }, {
        where: {
            id: 1
        }
    })
    res.send(true);
}

exports.deleteTodo = async (req, res) => {
    await models.Todo.destroy({
        where: {
            id: 1
        }
    })
    res.send(true);
}

