                               //Type of Data Type //


//  primitive

// 7 Type : String , Number , Boolean , Null , Undefined , symbol , bigint


//const score = 100
//const scoreValue = 100.3
//const isLoggedIn = false
//const outsideTemp = null
let   userEmail;

//const id = symbol('1234')
//const  anotherId =symbol ('1234')

//console.log (id === anotherId) ;

//const bigNumber =1235456789976533n

//const heros = ["shaktiman","naagraj","doga",]     
let myobj = {
    name:"ankul",                                
    age : 22 
}
const myFunction = function(){
    console.log ("hello World");
}

//console.log(typeof heros)



// Referance(Non primitive)

// Array , Objects , functions 

//****************************************************************** */
// stack( Primitive) ,  heap (non - primitive)

let myYoutubename = "ankulYadav.com"
let anothername = myYoutubename
anothername = " gulshan"

//console.log( myYoutubename)
//console.log(anothername)

let userone={
    Email:"ankul@fsfgmail.com" ,
 upi : "user@gyg"   
}
let usertwo =userone

usertwo.Email="gushan@ghgf.com"

console.log(userone.Email)
console.log(usertwo.Email)