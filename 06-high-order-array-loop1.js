//for loop
// ["","","","",""]
// [{},{},{},{},{}]

const arr = [1, 2, 3, 4, 5];                           //arreyloop//

for (const val1 of arr) {
    //console.log(val1);
}

const greeting = "good evening"
                                                      //string loop//
for (const val2 of greeting) {
    //console.log(`Each element of the array is ${val2}`);
}

//map


const map = new Map();
map.set("name", "john");
map.set("age", "30");
map.set("city", "new yourk");

for (const [key, value] of map) {
    console.log(key ,':-',value);   
}


const myobject = {
    name: "john",
    age: 30,
    city: "new yourk"
}
for (const [key, value] of myobject) {   //forof loop//
        
        console.log(key ,':-',value);   
    }