const mongoose = require('mongoose');
const User = mongoose.model('User');  //getter

module.exports = {
    index(req, res){
        res.render('index')
    },
    new(req, res){
        //form for adding new user
        
    },
    create(req, res){
        //insert user into DB
        User.create(req.body)
        .then(user => {
            //log into session 
            res.redirect(`/users/${user._id}`)
        })
        .catch(error => {
            //handle error
        })
    },
    show(req, res){
        //show single resource (User in this case)
    },
    update(req, res){

    },
    edit(req, res){},
    destroy(req, res){},
}