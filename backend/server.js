require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')



// create express app
const app = express()


// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use(process.env.API_PATH+'/user', userRoutes)



// Db connection
mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log("Connected to db and listening on port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
