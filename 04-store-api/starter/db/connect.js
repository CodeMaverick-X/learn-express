const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {dbName:'04-store-api'})
}

module.exports = connectDB
