const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/dataBase');
require('./server/config/routes')(app);


app.listen(port, ()=> console.log(`listening on port ${port}`));
