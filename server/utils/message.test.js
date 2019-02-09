var expect = require('expect');

var {generateMessage, generateLocationMessage}=require('./message');


describe('generatMessage',()=>{
    it('should generate correct message',()=>{
        var from = 'AdminTest';
        var text = 'textttest';
        var message = generateMessage(from, text);
        
        
        
            expect(message.from).toBe(from);
            expect(message.text).toBe(text);
            expect(typeof message.createdAt).toBe('number');
    });
   
});

    describe('generateLocationMessage',()=>{
        it('should generate correct location object',()=>{
            var from = 'AdminTest';
            var latitude = 10;
            var longitude = 15;
            var url = 'https://www.google.com/maps?q=10,15';
            var message = generateLocationMessage(from, latitude, longitude);
            // expect(message.from).toBe(from); we can do it with toMatchObject
            // expect(message.url).toBe(url);
            // expect(message).toInclude({from,url}); OLD
            expect(message).toMatchObject({from,url});
            expect(typeof message.createdAt).toBe('number');
        
        });
    
    });



