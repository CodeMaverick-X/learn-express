require('dotenv').config()

const productArray = require('./products.json')
const connectDB = require('./db/connect')
const Product = require('./models/product')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany({})
        await Product.create(productArray)
        console.log('Success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()