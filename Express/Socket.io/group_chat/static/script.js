
$(document).ready(() => {
    console.log('document ready!')
    const socket = io.connect();
    const name = prompt('Enter your name to join group chat', 'name');
    socket.emit('new_user', { name });
    socket.on('user_added', data => {
        $('#all_messages').prepend(`<p class="${data.id}">${data.name} joined the chat... </p>`)
    });
    //listen for previous messages when a new user joins the chat
    socket.on('prevMessages', data => {
        for (message of data.allMessages){
            console.log(message);
            $('#all_messages').prepend(`<p class="${message.id}">${message.name}: ${message.message} </p>`)
        }
    })

    //grab message from form and send to server
    $('form').submit( () => {  
        let newMessage = $('textarea[name="message"]').val();
        socket.emit('newMessage', { message: newMessage })
        //reset textarea field
        $('#message').val('');
        return false;
    });
    //listen for messages from server
    socket.on('addMessage', data => {
        console.log('got message from server...', data.name);
        $('#all_messages').prepend(`<p class="${data.id}">${data.name}: ${data.message} </p>`)
    });


    //remove all messages related to a user when they leave the chat and remove from all users
    socket.on('user_left', data => $(`.${data.id}`).remove());
})