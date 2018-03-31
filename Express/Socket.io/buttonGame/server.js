const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {res.render('index.ejs')});


const server = app.listen(port, ()=> console.log(`listening on port ${port}`));
//connect socket on the server side
const io = require('socket.io').listen(server);

let count = 0;
io.sockets.on('connection', socket => {
    console.log('server side connected to socket.io');
    //update a new user to the current count 
    socket.emit('newUser', {message: 'welcome new user',
                            count : count
                        });
    //listen and emit to client here...
    socket.on('buttonPushed', data => {
        count++;
        console.log(`the client says ${data.message}`)
        //full broadcast:
        io.emit('serverResponse', {
            response :  `from the server -- emitter socket id is: ${socket.id}`,
            count: count,
        });
    });
    socket.on('resetPushed', data => {
        console.log(data.message);
        count = 0;
        io.emit('countReset', {
            response : 'resetting the count in the server',
            count : count
        })
    })
})