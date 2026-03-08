//Array

const myArray = [0,1,2,3,4,5,]
const myHeros = ["shaktiman","naagraj",]

const myArr2 = new Array (1,2,3,4)
//console.log(myArray[2])

//Array methods
//myArray.push(6)
//myArray.push(7)                       ///add value in end array
//myArray.pop( )                        /// remove last value in array
//myHeros.unshift(9)
//myArray.shift()                    /// add value in starting in Array

//console.log(myArray.includes(9))
//console.log(myArray.includes(3))

const newArr =myArr2.join()

//console.log(myArray)
//console.log( newArr)


// Slice, splice

console.log("A", myArray)

const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B",myArray)

const myn2 = myArray.splice(1,3)    // splice method remove the element from the Array
console.log("C", myArray)
console.log(myn2)