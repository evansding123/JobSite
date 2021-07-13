const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.post('/jobs/postnewjob', controllers.jobs.postJob);

module.exports = router;