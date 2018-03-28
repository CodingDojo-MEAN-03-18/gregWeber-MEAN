const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(session({secret: 'this_is_the_secret'}));



//routes
app.get('/', (req,res) => {
    res.render('index.ejs', {title: 'Survey Form'})
});

app.post('/process', (req, res) => {
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect('/result')

});

app.get('/result', (req, res) => {
    console.log(req.session);
    context = {
        title: 'Survey Results',
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }
    res.render('result.ejs', context);
});


app.listen(8000, () => console.log('listening on port 8000'));