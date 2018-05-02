// bring in our note controller
const noteController = require('../../controllers/notes');

const router = require('express').Router();


// routes call respective methods in the controller
router
  .get('/', noteController.index)
  .post('/', noteController.create)
  // .get('/:noteID', noteController.show)
  // .put('/:noteID', noteController.update)
  // .delete('/:noteID', noteController.destroy);

module.exports = router;
