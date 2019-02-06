const path = require('path');//buildin nodejs module
const http = require('http');
const express = require('express');//not buildin
const socketIO = require('socket.io');//not buildin

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));//middleware conf.

io.on('connection', (socket)=>{
console.log('new user connected');

socket.emit('newEmail',{
from:'firma@primer.com',
text: 'seminar sutra',
createdAt: 123
});

socket.emit('newMessage',{
from:'tasha@primer.com',
text: 'text od tashe',
createdAt: 123
});

socket.on('createEmail',(newEmail)=>{
    console.log('createEmail',newEmail);
});

socket.on('createMessage',(message)=>{
    console.log('createMessage', message);
});

socket.on('disconnect', ()=>{
    console.log('client disconnected');
});
});
//console.log(__dirname+'../public');
//console.log(publicPath);
server.listen(port, ()=>{
    console.log(`Server up on port ${port}`);
});


