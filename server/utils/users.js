[{ 
    id: 'testidkor',
    name: 'Milos',
    room: 'The Office Fans'

}]

// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     getUserDescription(){
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('Milos',31);
// var description = me.getUserDescription();
// console.log(description);

class Users{
    constructor(){
        this.users=[];
    }
    addUser(id,name,room){
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id){
    
        // var user = this.users.filter((user)=>user.id===id)[0]
        var user = this.getUser(id);
        if(user){
            this.users=this.users.filter((user)=>user.id !== id);
        }
        return user;
    }

    
 

    getUser(id){
        return this.users.filter((user)=>user.id === id)[0]
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user)=>user.name); // we can do this with return also, its the same thing
        return namesArray;
    }
}

module.exports={Users};
