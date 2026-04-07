/*let myname = "hitesh      "

console.log(myname.truelength);
*/


let myHeros = ["thor", "spiderman"] 
let heropower = {
    thor: "hammer",
    spiderman:"sling",

 getSpiderPower : function(){
     console.log(`spidy power is ${this.spiderman}`);

 }
}

Object.prototype.heyhitesh = function () {
    console.log(`hitesh is present in all object`);
    
}
  Array.prototypeheyHitesh = function (params) {
    console.log(`hitesh say hello`)
}
//myHeros.hitesh()
//heropower.hitesh()
//heropower.heyHitesh()

const user = {
    name: "chai",
    email :"cchai@gmail.com"
}
const teacher = {
    makevideo:true
}
const teachingsupport = {
    isAvailable : false
}

const tASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__ : teachingsupport
}
teacher.__proto__ = user


//moder syntax
Object.setPrototypeOf(teachingsupport, teacher)

let anotherusername = "chaiAUrcode   "
String.prototype.trueLenth = function (params) {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
    
}
anotherusername.trueLenth()