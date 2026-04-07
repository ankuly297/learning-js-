//Es6

class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }
       changeusername(){
            return `${this.username.toUpperCase()
                }`
    }
   
} 
const chai = new user("chai,", "chai2gmail.com")
console.log(chai.changeusername())
    
///behind the seen

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
   
}
 user.prototype.encryptPassword=function(params) {
     return `${this.password}abc`
}
 user.prototype.changeusername = function (params) {
     return `${this.username.toUpperCase()}`
 }

const tea = new user("tea", "tea2gmail.com","1234")
console.log(tea.changeusername())
console.log(tea.encryptPassword())
    