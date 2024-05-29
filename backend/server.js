require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const projectRoutes = require('./routes/project')
const cors = require('cors')




// create express app
const app = express()


// Middleware

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use(`${process.env.API_PATH}/user`, userRoutes)
app.use(`${process.env.API_PATH}/project`, projectRoutes)




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
