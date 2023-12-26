console.log('Task Manager App')
const express = require(`express`)
const tasks = require('./routes/tasks')
require('dotenv').config()
const connectDB = require('./db/connect')
const app = express();
const port = 3000;

// middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (err) {
        console.log(`This is the error:: ${err}`)
    }
}

start()