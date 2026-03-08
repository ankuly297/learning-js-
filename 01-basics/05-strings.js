const name ="ankul"
const repoCount = 50 

console.log( name +  repoCount + "value")

console.log ( `hello my name is ${name} and my repoCount is ${ repoCount}`)

const gameName = new String ('ankula')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase ())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('u'))

const newString = gameName.substring(-8, 3)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringone = "     ankul   "
console.log(newStringone)
console.log(newStringone.trim())

const url = "https://ankul.com/ankul%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('_'))