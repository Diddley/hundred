const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const user_id = req.user_id

    const projects = await Project.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(projects)
}


// create a new project
const createProject = async (req, res) => {
    const { title, description } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    // add doc to database
    try {
        const user_id = req.user._id
        const project = await Project.create ({ title, description, user_id })
        req.status(200).json(project)
    } catch (err) {
        res.status(400).json({ error: err.message})
    }


}


// update a project
const updateProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Project not found' })
    }

    const project = await Project.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!project) {
        return res.status(404).json({ error: 'Project not found' })
    }

    res.status(200).json(project)
}




// delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Project not found' })
    }

    const project = await Project.findById({_id: id})

    if (!project) {
        return res.status(404).json({ error: 'Project not found' })
    }

    res.status(200).json(project)

}


module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}