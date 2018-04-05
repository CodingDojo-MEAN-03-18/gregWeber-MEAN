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
mongoose.connect('mongodb://localhost/message_board');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));


const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength : 4,
    },
    message: {
        type: String,
        required: true,
    },
    //many comments possible for each message so an array here
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }

    ],
}, { timestamps:true });

const commentSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    content: {
        type: String,
        required: true
    },
    //no array here because only one message associated with each comment
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
    },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/', (req, res) => {
    //grab all the messages/comments from the db for rendering
    Message.find({})
        .populate('comments')  //populate comments field
        .then( messages => {
            res.render('index', {title : 'Message Board', messages});
        })
        .catch( error => {
            console.log(error);
        });
});

app.post('/messages/new', (req,res) => {
    //create new message in db redirect to root on success
    Message.create(req.body)
        .then(message =>{
            console.log('new message: ', message);
            res.redirect('/');
        })
        .catch(error => {
            console.log('error: ', error);
        });
});

app.post('/comments/new', (req,res) => {
    //create new comment in db redirect to root on success
    
    Comment.create(req.body)
        .then(comment =>{
            console.log('comment: ',comment);
            //find the associated message and push the comment's id into message's comments array
            return Message.findById(comment.message)
                .then(message => {
                    message.comments.push(comment._id);
                    console.log(message);
                    return message.save()
                        .then( () => res.redirect('/'));
                })
        })
        .catch(error => {
            console.log(error);
        })
})

//listen to app on port...
const server = app.listen(port, ()=> console.log(`listening on ${port}`));