// bring in player controller
const playerController = require('../../controllers/players');

const router = require('express').Router();


// routes call respective methods in the controller
router
  .get('/', playerController.index)
  .post('/', playerController.create)
  // .get('/:noteID', playerController.show)
  .delete('/:id', playerController.destroy);

module.exports = router;
