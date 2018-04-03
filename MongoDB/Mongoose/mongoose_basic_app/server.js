
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
const path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//mongoose
const mongoose = require('mongoose');
//connect mongoose to mongoDB and the collection named 'basic_mongoose'
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

//create the schema for this collection
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,' Name is a required field']
        },
    age: {
        type : Number,
        required : [true, 'age is a required field '],
        }
    }, {
        timestamps : true,
    });


mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
mongoose.Promise = global.Promise; // sets Mongose promise to global

// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, (error, users) => {
        if (error){
            console.log('no match to your querry');
        } else {
            console.log('all users in the DB: ',users);
            res.render('index', { users, title: 'basic mongoose' });
        }
    })
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    let user = new User({name: req.body.name , age: req.body.age }); //create a user instance with data from the form 
    user.save()
        .then( user => {
            console.log('saved user:', user);
            res.redirect('/');
        })
        .catch( error => {
            const errors = Object.keys(error.errors) //uses keys method on Object prototype to go through the error.errors object
            .map(key => error.errors[key].message);  //maps the errors to an array for easy display
            console.log('errors: ', errors);
        })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
