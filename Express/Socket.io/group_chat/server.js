const express = require('express');
const path =  require('path');
const fs = require('fs');
const port = process.env.PORT || 8000
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));


app.get('/', (req,res) => res.render('index.ejs', {title : 'Group Chat'}));


const server = app.listen(port, ()=> console.log(`listening on ${port}`));

const io = require('socket.io').listen(server); 

const users = {}; //stores users by their id
const messages = []; //for message objects[{id:socket.id, name:name, message:message}, {...}, {...}]
io.sockets.on('connection', socket=> {
    console.log('connected on surver side')
    socket.on('new_user', data => {
        console.log('new user joined named: ', data.name , socket.id);
        //add new user to the users object by id
        users[socket.id] = data.name;
        socket.broadcast.emit('user_added', {name: data.name, id: socket.id})
        console.log(users);
    });

//add new users to a users object so we can get their name by id when creating new messages
//add a messages object to store messages by id;
// send messages over as they're created, send all live messages when new user joins
//delet messages by id from all messages when a user disconnects
//on client, display the messages to new users and add method to append new messages to current users




    socket.on('disconnect', () => {
        // send event notifaction to clients
        io.emit('user_left', { id: socket.id})
        //remove user from the user object on disconnect - stored by socket.id
        delete users[socket.id];
    
        //remove this users messages from the message array on disconnect - loop thru and delete on id match

    });
});