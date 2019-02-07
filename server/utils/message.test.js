var expect = require('expect');

var {generateMessage}=require('./message');


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


