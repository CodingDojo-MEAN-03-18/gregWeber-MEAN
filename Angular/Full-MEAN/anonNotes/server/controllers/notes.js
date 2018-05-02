const Note = require('mongoose').model('Note');

module.exports = {
  index(req, res) {
    console.log('retreiving note data from the server');
    Note.find({}).sort({ date: -1 })
      .then(notes => res.json(notes))
      .catch(console.log);
  },
  create(req, res) {
    console.log('in create method of controllers ', req.body);
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  }
};
