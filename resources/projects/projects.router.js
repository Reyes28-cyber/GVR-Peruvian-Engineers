const express = require('express')
const router = express.Router();


const { GetProjects, GetProjectById } = require('./projects.controller');

router.get ('/', GetProjects);
router.get ('/:id', GetProjectById);

module.exports = router;