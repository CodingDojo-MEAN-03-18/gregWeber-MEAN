const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  //used to set paths to views and static...
const port = process.env.PORT || 5000;  //if no environmment set - default is 5000
const session = require('express-session');
const app = express();

// set the templating engine
app.set('view engine', 'ejs');
// set the views path
app.set('views', path.join(__dirname, 'views'));
// to use body-parser middleWare to read forms 
app.use(bodyParser.urlencoded({extended : true}));
//set path to static dir
app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'topsecretkey'}));

app.get(('/'), (req, res) => {
    if (!req.session.count) {
        req.session.count = 1;
    }
    let data = {
        title: 'Counter',
        count : req.session.count
        }
    res.render('index', data);
});

app.post('/add_one', (req, res) => {
    req.session.count++;
    res.redirect('/');
});

app.post('/add_two', (req, res) => {
    req.session.count += 2;
    res.redirect('/');
});

app.post('/reset', (req, res) => {
    req.session.count = 1;
    res.redirect('/');
});


app.listen(port, () => console.log(`listening on port ${ port }`));


