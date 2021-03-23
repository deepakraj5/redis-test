const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deepak:deepakdb@cluster0.rkpgm.mongodb.net/redis-test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})