const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema(
  {
  name: {
    type: String,
    required: [true, 'name is a required field'],
    trim: true,
    },
    position: {
      type: String,
      required: [true, 'position is a required field'],
      trim: true,
    },
    status: {
      game1: {type: String, default: 'undecided'},
      game2: {type: String, default: 'undecided'},
      game3: {type: String, default: 'undecided'},
    }
  }, {
    timestamps: true
  }
);

// register the schema with mongoose and export
module.exports = mongoose.model('Player', playerSchema);
