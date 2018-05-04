const Player = require('mongoose').model('Player');

module.exports = {
  index(req, res) {
    console.log('retreiving player data from the server');
    Player.find({})
      .then(players => res.json(players))
      .catch(console.log);
  },

  create(req, res) {
    console.log('in create method of controllers ', req.body);
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  },

  update(req, res) {
    console.log('in update method of controllers ', req.body);
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(response => res.json(response))
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  },

  destroy(req, res) {
    console.log('in destroy method ', req.params.id);
    Player.findByIdAndRemove(req.params.id)
      .then(success => res.json(success))
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  }
};
