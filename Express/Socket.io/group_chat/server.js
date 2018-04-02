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
const allMessages = []; //for message objects[{id:socket.id, name:name, message:message}, {...}, {...}]
io.sockets.on('connection', socket=> {
    console.log('connected on surver side')
    socket.on('new_user', data => {
        console.log('new user joined named: ', data.name , socket.id);
        //add new user to the users object by id
        users[socket.id] = data.name;
        //brodcast to all about the new user - except new user
        socket.broadcast.emit('user_added', {name: data.name, id: socket.id})
        //send new user all current messages
        socket.emit('prevMessages', { allMessages })

    });

    socket.on('newMessage', data => {
        let newMessageData = {message : data.message,  name: users[socket.id], id:socket.id};
        // send back for all users
        io.emit('addMessage', newMessageData);
        //add to allMessages array
        allMessages.push(newMessageData);
        console.log('all messages: ', allMessages);
    })



    socket.on('disconnect', () => {
        // send event notifaction to clients
        io.emit('user_left', { id: socket.id})
        //remove user from the user object on disconnect - stored by socket.id
        delete users[socket.id];
        //remove this users messages from the message array on disconnect - loop thru and delete on id match
        allMessages.forEach( (element, index) => {
            if (element.id === socket.id){allMessages.splice(index, 1)};
        })
        console.log('messages now:', allMessages)

    });
});