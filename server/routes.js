const controllers = require('./controllers/index.js');
const router = require('express').Router();

console.log(controllers);
router.post('/jobs/:jobpost', controllers.jobs.postJob);

module.exports = router;