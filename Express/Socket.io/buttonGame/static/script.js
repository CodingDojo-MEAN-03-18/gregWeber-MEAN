

$(document).ready(()=>{
    console.log('document loaded');
    //connect sockets
    const socket = io.connect();

    //countupdate is a helper function defined below - it recieves data from the server and then is invoked here as the callback
    socket.on('newUser', countUpdate);
    $('#btn').click( () => socket.emit('buttonPushed', {message: 'hello from the client'}));
    socket.on('serverResponse', countUpdate)

    $('#reset').click( () => socket.emit('resetPushed', {message : 'reset the count please'}))
    socket.on('countReset', countUpdate);

    //helper function
    function countUpdate(data){
        $('#count').html(data.count);
    }
})