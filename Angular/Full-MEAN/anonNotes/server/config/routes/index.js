// pull in note router
const noteRouter = require('./notes.routes');
const router = require('express').Router();


// add /notes to all the notes routes
module.exports = router.use('/notes', noteRouter);
