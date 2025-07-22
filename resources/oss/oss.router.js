const express = require('express')
const router = express.Router();
const {GetBuckets} = require('./oss.controller');

router.get('/buckets', GetBuckets);

module.exports = router;