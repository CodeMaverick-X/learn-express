const express = require('express')
const { getAllTasks, deleteTask, updateTask, getTask, createTask } = require('../controllers/tasks')
const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router