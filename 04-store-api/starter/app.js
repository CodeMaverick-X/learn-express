console.log('04 Store API')
const express = require('express')
app = express()

// app.use(errorMiddleware)
// app.use(notFoundMiddleware)

app.use(express.json)
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

const start = () => {
    // connect DB
    app.listen(PORT, console.log(`Server listening on port ${PORT}`))
}