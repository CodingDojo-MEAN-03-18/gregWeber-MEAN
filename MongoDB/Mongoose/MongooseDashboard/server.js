const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const { Schema } = mongoose;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

//set up shcema/models/connection to mongoose and db
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

//create schema/model -- the animal mongose represented here w/ mGoose so as to not confuse with the module mongoose
const mGooseSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    age : {
        type: Number,
        required: true
    },
    classification : {
        type : String,
        required : true,
    },
}, { timestamps : true });

const Mgoose = mongoose.model('mGoose', mGooseSchema );


app.get('/', (req, res) => {
    Mgoose.find({}, (errors, mGooses) => {
        if (errors){
            console.log(errors);
        } else {
           res.render('index', { mGooses }); 
        }
    }) 
})

app.get('/mongooses/new', (req, res) => {
    //route to handle form for adding new mongoose
    res.render('new');
})

app.post('/mongooses', (req, res) => {
   //create a new document
    Mgoose.create(req.body)
        .then( mGoose => {
            console.log('created a new instance in the db of:', mGoose);
            res.redirect(`/mongoose/${mGoose._id}`)  //grab the id of the new instance and use in redirect
        })
        .catch(error => {
            console.log('error');
        })
})

app.get('/mongoose/:id', (req, res) => {
    console.log('this guys id: ',req.params.id);
    //query based on the id and pass to the render
    Mgoose.find({ _id : req.params.id }, (error, mGoose) => {
        if (error){
        console.log(error);
        } else {
        console.log(mGoose);
        res.render('show', { mGoose: mGoose[0] });
        }
    });
})

app.get('/mongooses/edit/:id', (req, res) => {
    // query info on this lil guy and render a form to edit
    Mgoose.find({ _id : req.params.id }, (error, mGoose) => {
        if (error){
        console.log(error);
        } else {
        console.log(mGoose);
        res.render('edit', { mGoose: mGoose[0] });
        }
    });
})

app.post('/mongoose/:id', (req, res) => {
    //update based on the info from the form
    Mgoose.update({_id : req.params.id}, {name: req.body.name, age:req.body.age, classification: req.body.classification}, error => {
        if (error){
            console.log('something went wrong...');
        } else {
            console.log('successful update!');
            res.redirect('/');
        }
    })
})

app.post('/mongooses/destroy/:id', (req, res) => {
    //remove this instance from the db
    Mgoose.remove({_id: req.params.id }, error => {
        if (error){
            console.log('something went wrong...');
        } else {
            console.log('succfull removal from the db');
            res.redirect('/');
        }
    })
})


//listen to app on port...
const server = app.listen(port, ()=> console.log(`listening on ${port}`));