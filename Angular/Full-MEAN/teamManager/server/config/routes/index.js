const playerRouter = require('./players.routes');
const router = require('express').Router();


// add /notes to all the notes routes
module.exports = router.use('/players', playerRouter);
