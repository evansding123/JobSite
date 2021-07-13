const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.post('/jobs/addjob', controllers.jobs.postJob);
router.post('/notes/addnote', controllers.notes.postNote);

module.exports = router;