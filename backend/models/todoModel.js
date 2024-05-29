const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    project_id: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Todo', todoSchema)