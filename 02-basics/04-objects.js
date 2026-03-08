//const tinderUser = new object ()
const tinderUser = {}


tinderUser.Id = "123abc"
tinderUser.name = "ankul"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "some2@gsfdhdd.com",
    fullname:{ 
        userfullname:{
            firstname : "ankul",
            lastname:  "yadav"
        }}
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = { 3:"c",4:"d"}

//const obj3 = { obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3)


console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//**************    object de---structure and json api */

const course ={
    coursename : "js in Hindi",
    price : 999,
    courseInstructor : "hitesh",

}
const {courseInstructor : instructor} = course
console.log(courseInstructor)


//{
    name: "ankul",
    coursename : "js in Hindi",
    price : Free
//}