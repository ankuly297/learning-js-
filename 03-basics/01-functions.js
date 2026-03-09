function sayMyName (){
    console.log("k")
    console.log("l" )
    console.log("M") 

}
//sayMyName()

//function addTwoNumbers(number1,number2){
//console.log (number1 +number2)

//addTwoNumbers (3,4)

function addTwoNumbers( number1,number2){

   let result = number1 +number2
    return result
    return number1 +number2
}
const result=addTwoNumbers(3,5)
//console.log("result:",result)


function loginUserMessage (username){
    return `${username}just logged in`
}
console.log(loginUserMessage("ankul"))



function calculateCartPrice( ...num1){
    return num1
}
console.log(calculateCartPrice(2,200,300,400,500))



const user={
    username: "ankul",
    price : 999
}
function handleobject(anyobject){
    console.log(` Username is ${anyobject.username}  and price ${anyobject.price}`)

}
//handleobject(user)
handleobject({
    username: "sam",
    price : 399
})

const myNewArray =[200,100,300,440]

function returnSecondValue(getArray){
return getArray[1]
}
console.log (returnSecondValue(myNewArray))