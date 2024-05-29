const express = require('express')
const {
    getProjects,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController') 
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require authentication for all routes
router.use(requireAuth)

// GET all projects
router.get('/', getProjects)

// POST create a new project
router.post('/', createProject)

// PUT update a project
router.put('/:id', updateProject)

// DELETE delete a project
router.delete('/:id', deleteProject)


module.exports = router