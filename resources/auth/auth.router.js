const express = require('express')
const { GetApsToken } = require('./auth.controller');

const router = express.Router();



// Endpoint to get Autodesk Platform Services token
router.get ('/get-aps-token', GetApsToken);


module.exports = router;