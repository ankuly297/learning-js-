/*const promisesone = new Promise(function (resolve, reject) {
    //DO an async task
    //DB calls ,crytopragrapy , networkcall
  setTimeout(function(params) {
      console.log("Asyn ctask is complet")
      resolve();
  },1000)  
})
promisesone.then(function (params) {
    console.log("Promise consumed")
})
 new Promise((resolve, reject) => {
    setTimeout(function (params) {
        console.log("Aysnc task 2")
        resolve()
    }, 1000)
 })
    .then(function () {
    console.log("async 2 resolve")
})

const Promisethree = new Promise(function(resolve, reject)  {
    setTimeout(function (params) {
        
       resolve({username:"chai",email:"chai@gmail.com"}) 
    },1000)
})
Promisethree.then(function (user) {
    console.log('username')
})

const Promisefour = new Promise((resolve, reject) => {
   setTimeout(function (params) {
       let error = false  //false//
       if (!error) {
        resolve({Aname : "ankul", address:"112233"})
       } else {
           reject('ERROR: something went wrong')
       }
   },1000)
})
Promisefour.then(function (Aname) {
    console.log(Aname);
    return Aname.username
})
    .then((username)=>{
        console.log(ERROR)
    })
.catch(function (ERROR) {
    console.log("ERROR")
}).finally(() => console.log("The promise is either resolved or rejected"))*/

/*
const promisefive = new Promise((resolve, reject) => {
   setTimeout(function (params) {
       let error = false
       if (!error) {
        resolve({username:"javascript",password:"12345"})
       }
       else {
           reject('ERROR: js  something went wrong')
       }
   },1000)
})
async function consumePromiseFive(params) {
   try { const response = await promisefive
    console.log("username")
    
   } catch (error) {
    console.log(error)
   } 
   
}
consumePromiseFive()*/

/*async function getallUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/user');
     
        const data = await Response.json()
        console.log(data);

   } catch (error) {
        console.log("E:", error);    
   }
}*/
//getallUser();


fetch('https://jsonplaceholder.typicode.com/user')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('data');
   })
    .catch((error) => {
       console.log('error')
    })
   