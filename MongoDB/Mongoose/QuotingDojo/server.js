const express = require('express');
const fs =  require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

//set up shcema/models/connection to mongoose and db
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const QuoteSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'name is required']
        },
        quote: {
            type: 'string',
            required: [true, 'you must enter a quote']
        }

    }, { timestamps :true })

mongoose.model('Quote', QuoteSchema );
const Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;

//root route
app.get('/', (req,res) => {
    //render index route which has the form
    res.render('index', {title : 'Quoting Dojo'})
})

app.post('/quotes', (req, res) => {
    let quote = new Quote({name: req.body.name , quote: req.body.quote });
    quote.save()
    .then( quote => {
        console.log('new quote saved: ', quote);
        res.redirect('/quotes'); //should reddirect to the quotes get route
    })
    .catch( error => {
        const errors = Object.keys(error.errors) //uses keys method on Object prototype to go through the error.errors object
        .map(key => error.errors[key].message);  //maps the errors to an array for easy display
        console.log('errors: ', errors);
    })
})

app.get('/quotes', (req,res) => {
    Quote.find({}, (errors, quotes) => {
        if (errors) {
            console.log('no match to your query...');
        } else {
            res.render('quotes', {title : quotes, quotes})
        }
    })
})


//listen to app on port...
const server = app.listen(port, ()=> console.log(`listening on ${port}`));