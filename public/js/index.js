var socket = io();
            socket.on('connect',function(){
                console.log('connected to server');

                socket.emit('createEmail',{
                    to:'misha@primer.com',
                    text: 'email primer 1'
                    
                });

                socket.emit('createMessage',{
                    from: 'ljusha@primer.com',
                    text: 'poslato'
                });
            });
            socket.on('disconnect', function(){
                console.log('disconnected from server');
            });

            socket.on('newEmail', function(email){
                console.log('new email', email);
            });

            socket.on('newMessage', function(message){
                console.log('newMessage',message);
            });