const express = require('express')
require('./db/mongoose')
const studentRoute = require('./routes/students')

const app = express()

app.use(express.json())
app.use(studentRoute)

app.listen(3000, () => {
    console.log('server upon server 3000')
})