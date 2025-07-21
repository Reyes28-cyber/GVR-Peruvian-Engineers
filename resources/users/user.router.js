const express = require ('express');
const router = express.Router();

const { GetUsers, GetUserById } = require('./user.controller');

router.get ('/', GetUsers);
router.get ('/:id', GetUserById);

module.exports = router;