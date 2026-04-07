const book = [{ title:'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
              { title:'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
              { title:'1984', author: 'George Orwell', year: 1949 },
              { title:'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
  { title: 'moby dick', author: 'Herman Melville', year: 1851 },]; 
  
let userbooks = book.filter((bk) => bk.year > 1900);
userbooks = book.filter((bk) =>{return bk.year > 1800 && bk.author === 'J.R.R. Tolkien' });
//console.log(userbooks )


//const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

//const newNumbers = myNumber.map((num) => { return num + 10 });

//console.log(newNumbers);
//const value = myNumber.forEach((num) => { console.log(num); });

/*const newnum = myNumber 
    .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num   >=40)
  //console.log(newnum)*/


const myNumber = [1, 2, 3,];
/*const mytotal = myNumber.reduce(function (accumulator, currentValue) {
console.log(`${accumulator}and ${currentValue} `)
  return accumulator + currentValue;
}, 0);*/


//const mytotal= myNumber.reduce ((acc, curr)=> acc + curr, 0)
//console.log(mytotal)


const ShoopingCart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 }
];
const pricetopay = ShoopingCart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(pricetopay);