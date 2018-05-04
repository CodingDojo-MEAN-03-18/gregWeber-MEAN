
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect angular to express - Angular will create the dist folder with its index file once we run ng build
app.use(express.static(path.join(__dirname, 'dist')));

// bring in connection to db
require('./server/config/database');
// bring inb routes
app.use('/api', require('./server/config/routes'));
// bring in catch all on routes
app.use(require('./server/config/routes/catch-all.route'));

app.listen(port, () => console.log(`express server listening on port ${port}`));
