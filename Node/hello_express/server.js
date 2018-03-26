var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

// require body-parser -- for pulling data from the POST object
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


//get base url
app.get('/', (request, response) => response.send('<h1>Hello Express!</h1>'));



app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


// console.log(__dirname);

app.listen(8000, () => console.log('listening on port 8000'));


