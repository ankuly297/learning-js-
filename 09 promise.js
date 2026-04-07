/*const promiseOne = new Promise(function (reslove, reject)  {
   //DO an async task
    //DB calls,crytography,newtwork
 setTimeout(function() {
     console.log('async task is complete')
     reslove()
 }, 1000);
})

promiseOne.then(function (params) {
    console.log("Promise consumed");
})



new Promise (function (reslove,reject) {
    setTimeout(function () {
        console.log("Async task 2")
        reslove()
    }, 1000)
})

.then(function () {
    console.log()
})


const Promisethree = new Promise(function (reslove,reject) {
    setTimeout(function (params) {
        console.log("")
        reslove({ username: "chai", email: "ankul@gmail.com" })
        
    },1000)
}) 
Promisethree.then(function (user) {
    console.log("user")
})

const Promisefour = new Promise((resolve, reject) => {
    setTimeout(function (params) {
        let Error = false
        if (!Error) {
            resolve({username :"ankul",password:1234})
        } else {
            reject(`Error: Something went wrong`)
        }
    },1000)
})
Promisefour.then( (user) => {
    console.log(user)
    return user.username
})
    .then((username) => {
    console.log(username);
    })
    .catch(function (params) {
    console.log('Error')
    
}).finally(()=>console.log("The Promise is Either resolved or rejected")
)
const Promisefive =  new Promise((resolve, reject) =>  {
    setTimeout(function(params) {
        let error = false
        if (!error){
            resolve({user:"naman",password:"12345"})
        } else {
            reject(`Error: JS went wrong`)
        }
    },1000)
})
async function consumePromiseFive() {
    const respose = await Promisefive
    console.log(respose);
}
consumePromiseFive()

async function getalluser() {
 try { const respose= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await respose.json()
    console.log(data);

    
 } catch (error) {
    console.log ("e:",error)
 }
}
getalluser() */

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(respose) {
        return respose.json
    })
    .then((data) => {
        console.log(data);
    })
.catch((error)=>console.log(error))