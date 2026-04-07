// for of loop

//['', '', '', '', '']
//[{}, {}, {}, {}]


const Arr = [1, 2, 3, 4, 5];              /// arrary of numbers for of loop
for (const number of Arr) {
    //console.log( `number is ${number}`);
}


const greetings = "hello world";                   /// string for of loop
for (const char of greetings) {
    console.log(`character is ${char}`);
}

//map

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');

//console.log(map);

for (const [key, value] of map) {
    //console.log(` ${key} and ${value}`);
}


const myobject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
