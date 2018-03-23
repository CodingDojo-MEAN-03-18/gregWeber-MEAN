var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('client request URL:', request.url);

    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }  
    
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }  
    
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }  

    else if(request.url === '/cars/new') {
        fs.readFile('views/new_car_form.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }  
    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }  

    //add image routes here
    else if(request.url === '/images/cars/pexels-photo-149446.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pexels-photo-149446.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cars/pexels-photo-149813.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pexels-photo-149813.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cars/pexels-photo-210058.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pexels-photo-210058.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cars/pexels-photo-221273.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pexels-photo-221273.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    //home background image
    else if(request.url === '/images/cats/pexels-photo-96399.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/pexels-photo-96399.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    //form page background image
    else if(request.url === '/images/cars/pexels-photo-168938.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pexels-photo-168938.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    //cats
    else if(request.url === '/images/cats/pexels-photo-127028.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/pexels-photo-127028.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cats/pexels-photo-399647.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/pexels-photo-399647.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cats/pexels-photo-416160.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/pexels-photo-416160.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cats/pexels-photo-603858.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/pexels-photo-603858.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }


});

server.listen(6789);

console.log('Running on Node juice - port 6789');