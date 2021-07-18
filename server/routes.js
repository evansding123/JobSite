const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.post('/jobs/addjob', controllers.jobs.postJob);
router.post('/accounts/addaccount', controllers.accounts.postAccount);
router.get('/accounts/:email', controllers.accounts.getAccountId);
router.post('/notes/addnote', controllers.notes.postNote);
router.get('/notes/getnote/:id/:account_id', controllers.notes.getOneNote);
router.get('/notes/getnote', controllers.notes.getNotes);
router.put('/notes', controllers.notes.updateNote);
router.delete('/notes/:id/:accounts_id', controllers.notes.deleteNote);
router.post('/notification/addnotification', controllers.notifications.postNotification);
router.get('/notification/getnotification', controllers.notifications.getNotification)
router.get('/notification/getjobnotification', controllers.notifications.getJobNotification)


module.exports = router;