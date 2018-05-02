// mongoDB Connect

const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, '../models');

// regExpression to match .js files to read for db connections
const reg = new RegExp('\\.js$', 'i');

//connect to mongoDB
mongoose.connect('mongodb://localhost/anonQuotes');
mongoose.connection.on('connected', () => console.log('connected to mongodb annonQuotes'))

// read files in models synchronously to make sure this happens before anyhting else
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
