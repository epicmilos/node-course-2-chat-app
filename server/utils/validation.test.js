const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should rejct non-string values',()=>{
        var res = isRealString(55);
        expect(res).toBe(false);
    });
    it('should rejct string with only spaces',()=>{
        var res = isRealString('   ');
        expect(res).toBe(false);
    });

    it('should allow string with non space characters',()=>{
        var res = isRealString('  teststring  ');
        expect(res).toBe(true);
    });

    
    
});