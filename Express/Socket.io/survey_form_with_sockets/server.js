const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const port = process.env.PORT || 8000;
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended : true}));

//routes
app.get('/', (req,res) => {
    res.render('index.ejs', {title: 'Survey Form'})
});


//set up a server variable to listen to the port
const server = app.listen(8000, function(){
    console.log('listening on port 8000');
});

const io = require('socket.io').listen(server);
 


io.sockets.on('connection', function (socket) {
    console.log('socket connected');
    // listen for the form to be submitted
    socket.on('form_submitted', function(data) {
        let randNum = Math.floor(Math.random()*1000+1);
        console.log(data.message)
        socket.emit('server_response', { luckyNumber : randNum })
    })
    // listen for a disconnect event
    socket.on('disconnect', () => console.log('disconnected socket'))
  });
  