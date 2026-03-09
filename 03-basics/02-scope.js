//var c = 300
let a =320

//console.log(a)
//console.log(B)
//console.log(C)

if(true){

    let a = 10
    const B = 20
     //console.log("INNER:",a)
}
//console.log(a)
//console.log(B)
//console.log(C)


////*****************  nested scope ************* */

function one(){
    const username= "ankul"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
 one()

 if(true){
    const username = "ankul"

    if (username === "ankul"){
        const website = "youtube"
      //console.log(username+website)
    }
//console.log(website)
 }
 //console.log(username)


 //********************intersting**************** */
 
 
 
 console.log(addone(5))
 
 function addone(num){                       // this is function//
    return + 1
 }
     


 const addtwo = function addtwo(num){         //this is also a function //
    return +2
 }
 console.log(addtwo(5))