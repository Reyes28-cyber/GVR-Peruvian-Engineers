const express = require('express')
const router = express.Router();
const {GetBuckets, CreateBucket, GetBucket} = require('./oss.controller');

router.get('/buckets', GetBuckets);
router.post('/buckets', CreateBucket);
router.get('/buckets/:nombrebucket', GetBucket); // Assuming you want to get a specific bucket by key

module.exports = router;