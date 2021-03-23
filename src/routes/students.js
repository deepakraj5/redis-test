const route = require('express').Router()
const Students =require('../models/students')
const redisClient = require('../redis/redis')

route.get("/dept/:name", cache, async (req, res) => {
    try {
        console.log("New Fetching...")
        const { name } = req.params
        const student = await Students.findOne({ name })

        redisClient.setex(name, 3600, student.dept)
        res.send({ dept: student.dept})
    } catch (err) {
        res.status(400).send({ error: err })
    }
})

function cache (req, res, next) {
    const { name } = req.params

    redisClient.get(name, (error, data) => {
        if (error) throw err
        if (data !== null) {
            console.log("Fetch from cache...")
            res.send({ dept: data })
        } else {
            console.log("next")
            next()
        }
    })
}

module.exports = route