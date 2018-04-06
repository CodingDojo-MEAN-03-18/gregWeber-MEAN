
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i') // lowercase 'i' means case insensitive
// const modelsPath = path.join(__dirname, '../models'); //starts from current dir
const modelsPath = path.resolve('server/models'); //starts from process root


//set up shcema/models/connection to mongoose and db
mongoose.connect('mongodb://localhost/log-reg-test');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
})

