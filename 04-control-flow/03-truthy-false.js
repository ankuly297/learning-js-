const userEmail =[]

if (userEmail){
    console.log("i have Email")
}
else{console.log("I have not Email")}


///falsy Value

//false,0 ,-0,BigInt on , "", null, undefined,NaN

////thruthy Value

// "0", 'false'," ",[] , { } , functions(){},


if( userEmail.length ===0 ){
    console.log("array is empty")
}
const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}

//nullish coalescing Operator(??): null undefined

let val1;
val1= 5 ?? 10
V






console.log("val1")