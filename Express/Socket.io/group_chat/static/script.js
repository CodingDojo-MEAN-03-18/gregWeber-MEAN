
$(document).ready(() => {
    console.log('document ready!')
    const socket = io.connect();
    const name = prompt('Enter your name to join group chat', 'name');
    socket.emit('new_user', {name});
    socket.on('user_added', data =>{
        $('#all_messages').append(`<p id="${data.id}">${data.name} joined the chat... </p>`)
    });





    //remove all messages related to a user when they leave the chat and remove from all users
    socket.on('user_left', data => $(`#${data.id}`).remove());
})