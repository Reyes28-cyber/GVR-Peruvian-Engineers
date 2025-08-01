const express = require('express')
const router = express.Router();


const { GetProjects, CreateProject, DeleteProject, GetProject } = require('./projects.controller');

// Endpoint to get all projects
router.get ('/', GetProjects);

// /projects/:projectId
router.get ('/:projectId', GetProject);

// Endpoint to delete a project
router.delete ('/', DeleteProject);

// Endpoint to create a new project
router.post ('/', CreateProject);


module.exports = router;