const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dept: {
        type: String
    }
})

const Students = mongoose.model('Student', studentSchema)

module.exports = Students