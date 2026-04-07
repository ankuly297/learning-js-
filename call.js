function SetUsername(username) {
   //complex DB
    this.Username = username
}
function createUser(username, email, password) {
  
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@gb.com", "123")
console.log(chai)