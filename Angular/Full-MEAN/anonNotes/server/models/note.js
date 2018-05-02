
const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
  note: {
    type: String,
    required: [true, 'Note is a required field'],
    trim: true,
    },
  }, {
    timestamps: true
  }
);

// register the schema with mongoose and export
module.exports = mongoose.model('Note', noteSchema);
