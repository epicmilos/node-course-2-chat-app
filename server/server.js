const path = require('path');//buildin nodejs module
const http = require('http');
const express = require('express');//not buildin
const socketIO = require('socket.io');//not buildin

const {generateMessage, generateLocationMessage}=require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();


app.use(express.static(publicPath));//middleware conf.

io.on('connection', (socket)=>{
console.log('new user connected');



// socket.emit('newEmail',{
// from:'firma@primer.com',
// text: 'seminar sutra',
// createdAt: 123
// });

// socket.emit('newMessage',{
// from:'tasha@primer.com',
// text: 'text od tashe',
// createdAt: 123
// });

// socket.on('createEmail',(newEmail)=>{
//     console.log('createEmail',newEmail);
// });

socket.on('join',(params, callback)=>{
    if (!isRealString(params.name) || !isRealString(params.room)){
        return callback('Name and room name are required');
    }

    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name,params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    //socket.leave('TOffice');
    //io.emit > io.to('TOffice').emit
    //socket.broadcast.emit > socket.broadcast.to('TOffice').emit
    //socket.emit 
    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin',`${params.name} has joined.`));
    callback();
});

socket.on('createMessage',(message,callback)=>{
    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback();
    
    // socket.broadcast.emit('newMessage',{
    //     from: message.from,
    //     text:message.text,
    //     createdAt: new Date().getTime()
    // });

});

socket.on('createLocationMessage',(coords)=>{
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude,coords.longitude));
});

socket.on('disconnect', ()=>{
    var user = users.removeUser(socket.id);
    if(user){
       io.to(user.room).emit('updateUserList',users.getUserList(user.room));
       io.to(user.room).emit('newMessage',generateMessage('Admin',`${user.name}has left.`));
        }
});
});
//console.log(__dirname+'../public');
//console.log(publicPath);
server.listen(port, ()=>{
    console.log(`Server up on port ${port}`);
});


