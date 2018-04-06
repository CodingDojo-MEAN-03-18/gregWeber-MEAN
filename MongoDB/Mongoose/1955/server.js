const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const { Schema } = mongoose;

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const fiftyFiveSchema = new Schema ({
    name: {
        type: String,
        required : true,
    }
})

const FiftyFive = mongoose.model('FiftyFive', fiftyFiveSchema)


// res.json()
app.get('/', (req, res) => {
    FiftyFive.find({})
        .then(data => {
            // console.log(data);
            res.json({ message: 'folks born in 1955', data });
        })
        .catch(err => {
            console.log('error: ', err);
        })
});

app.get('/new/:name', (req, res) => {
    console.log(req.params.name);
    FiftyFive.create({ name: req.params.name })
        .then( person => {
            console.log('New person added: ', person);
            res.redirect('/');
        })
        .catch(err => console.log(err))
})

app.get('/remove/:name', (req, res) => {
    FiftyFive.findOneAndRemove({ name: req.params.name})
    .then(person => {
        console.log('Person removed from the DB: ', person);
        res.redirect('/');
    })
    .catch(err => console.log);
})

app.get('/:name', (req, res) => {
    FiftyFive.find({name: req.params.name})
        .then(query => {
            res.json({message: 'here is your result', query});
        })
        .catch(err => console.log(err));
})

app.listen(port, () => console.log(`listening on port ${ port }`));