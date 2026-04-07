const myobject = {
    js: "javascript",
    rb: "ruby",
    py : "python",
    java: "java",
    cpp: "c++"
}   
    for (const key in myobject) {                    //forin loop it is applicable for objects//
   // console.log(`${key} shortcut is for ${myobject[key]}  `);    
}
    

const myarray = ["js", "ruby", "python", "java", "c++"]
for (const index in myarray) {
   // console.log(`${index} index is for ${myarray[index]}`);

                                                               //forin loop it is applicable
                                                           // for arrays,objects and //strings//
}

const map = new Map();
map.set("name", "john");
map.set("age", "30");                                      //forin loop is not applicable for maps//
map.set("city", "new yourk");
for (const key in map) {
    //console.log(`${key} shortcut is for ${map[key]}  `);    
}


const coding = ["js", "ruby", "java", "python", "cpp"]

////coding.forEach(function (val1) {                          //foreach loop and funtion//

   // console.log(val1)
//});


//coding.forEach((item) => {
   // console.log(item)
//})


//function printme(item) {
  //  console.log(item)

//}coding.forEach(printme)

//coding.forEach((item,index,arr)=>{
//console.log(item,index,arr)
//})



const mycoding = [
    {
        languagename: "javascript",
        languagefilename:"js"
    },
    {
        languagename: "python",
        languagefilename :"py"
    } ,
    {
        languagename: "ruby",
        languagefilename : "ry"
    },
]
mycoding.forEach((index)=> {
    console.log(index.languagename)
})