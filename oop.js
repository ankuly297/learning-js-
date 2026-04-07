/*const user = {
    username: "ankul",
    loginCount: 8,
    signedIn: true,
    getUserDetalis: function () {
      //  console.log("got uer detales from database");
      //console.log(`username:${this.username}`)
       console.log(this)
    }

}
console.log(user.username);
//console.log(user.getUserDetalis())
console.log(this);
*/
function user(username, loginCount, isloggedIn) {
    this.username = username;
    this.isloggedIn = isloggedIn;
    this.loginCount = loginCount;

return this
}   
const userOne = new user("hitesh", 12, true)
const usertwo = new user("chaiAurcode",11, false)
console.log(userOne.constructor);
console.log(usertwo);


