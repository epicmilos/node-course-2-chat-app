const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{

  var users;

  beforeEach(()=>{
    users = new Users();
    users.users=[{
      id: '1',
      name: 'Nara',
      room: 'Development'
    },{
      id: '2',
      name: 'Zetsu',
      room: 'Testing'
    },{
      id: '3',
      name: 'Killua',
      room: 'Testing'
    }];
  });

    it('should add a new user',()=>{
      var users = new Users();
      var user = {
          id: '123',
          name: 'Milos',
          room: 'mishas'
      };
      var resUser = users.addUser(user.id,user.name,user.room);  

      expect(users.users).toEqual([user]);

    });

    it('should remove a user',()=>{
      var userId = '2';
      var user = users.removeUser(userId);

      expect(user.id).toBe(userId);
      expect(users.users.length).toBe(2);
    });

    it('should not remove a user',()=>{
      var userId = '99';
      var user = users.removeUser(userId);

      expect(user).toBeFalsy();
      expect(users.users.length).toBe(3);
    });

    it('should find user',()=>{
      var userId = '2';
      var user = users.getUser(userId);

      expect(user.id).toBe(userId);
    });

    it('should not find user',()=>{
      var userId = '99';
      var user = users.getUser(userId);

      expect(user).toBeFalsy();
    });

    it('should return names for testing course',()=>{
      var userList = users.getUserList('Testing');
      expect(userList).toEqual(['Zetsu','Killua']);
    });

    it('should return names for development course',()=>{
      var userList = users.getUserList('Development');
      expect(userList).toEqual(['Nara']);
    });
});
