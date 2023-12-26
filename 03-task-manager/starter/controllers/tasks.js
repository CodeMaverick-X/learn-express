const Task = require('../models/Task')


const getAllTasks = (req, res) => {
res.send('all items from the file')
}

const createTask = async (req, res) => {
    try {

        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).send(err)
    }
}
const getTask = (req, res) => {
res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('updated task')
}
const deleteTask = (req, res) => {
    res.send('deleted task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}