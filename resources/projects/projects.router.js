const express = require('express')
const router = express.Router();


const { GetProjects, GetProjectById, CreateProject, DeleteProject } = require('./projects.controller');

// Endpoint to get all projects
router.get ('/', GetProjects);
router.get ('/:id', GetProjectById);

// Endpoint to delete a project
router.delete ('/', DeleteProject);

// Endpoint to create a new project
router.post ('/', CreateProject);


module.exports = router;