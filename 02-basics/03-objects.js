 // singleton
// object.create


 ///object litrales

 const mysym =Symbol ("key1") 

 const JsUser = { 
    "full name ": "ankul yadav",
    [mysym]:"key1",
    name: "ankul",
    age: 20,
    location: "jaipur",
    email : "ankul@google.com",
    isloggedIn: false,
    lastLoginDays : ["monday","wednesday"]
 }

 //console.log(JsUser.email)
 //console.log(JsUser["email"])
 //console.log(JsUser["full name "] )
 //console.log(JsUser[mysym])

 JsUser.email = "amkul@duicc.com"
//Object.freeze(JsUser)
JsUser.email = "ramu@cbygx.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js User")
}

JsUser.greetingtwo = function(){
    console.log(`hello js User ${this.name}`)
}


console.log( JsUser.greeting())
console.log(JsUser.greetingtwo())