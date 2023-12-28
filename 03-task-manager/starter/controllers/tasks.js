const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async-err-wrapper')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req, res, next) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    res.send('all items from the file')
})

const createTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper( async (req, res, next) => {
    const {id: TaskID} = req.params
    const task = await Task.findOne({_id:TaskID})
    if (!task) {
        return next(createCustomError(`no task with id ${TaskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper( async (req, res, next) => {
    const {id: TaskID} = req.params
    const task = await Task.findOneAndUpdate({_id: TaskID}, req.body,{
        new: true,
        runValidators: true,
    })
    if (!task) {
        return next(createCustomError(`no task with id ${TaskID}`, 404))
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper( async (req, res, next) => {
    const {id: TaskID} = req.params
    const task = await Task.findOneAndDelete({_id: TaskID})
    if (!task) {
        return next(createCustomError(`no task with id ${TaskID}`, 404))
    }
    res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}