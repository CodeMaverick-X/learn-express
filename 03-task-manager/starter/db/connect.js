// const connectionString = "mongodb+srv://reinhard:<password>@cluster0.usn41pv.mongodb.net/?retryWrites=true&w=majority"

const DB = require('mongoose')

const connectDB = (url) => {
    return DB.connect(url, {dbName:'03-Task-Manager'})
}

module.exports = connectDB