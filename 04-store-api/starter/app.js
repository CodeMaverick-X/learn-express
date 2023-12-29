require('dotenv').config()
require('express-async-errors')
const express = require('express')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const ProductsRouter = require('./routes/products')

app = express()


app.get('/', (req, res) => {
    res.send('<h1>Store API </h1> <a href="/api/v1/products"> products route </a>')
})

app.use('/api/v1/products', ProductsRouter)


app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

app.use(express.json)
const PORT = process.env.PORT || 3000

// routes


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server listening on port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}
start()