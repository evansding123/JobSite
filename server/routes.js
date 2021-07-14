const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.post('/jobs/addjob', controllers.jobs.postJob);
router.post('/notes/addnote', controllers.notes.postNote);
router.post('/notification/addnotification', controllers.notifications.postNotification);
router.post('/accounts/addaccount', controllers.accounts.postAccount);
router.get('/notification/getnotification', controllers.notifications.getNotification)


module.exports = router;