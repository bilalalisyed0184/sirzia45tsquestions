// ASSIGNMENT:21
// 21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item{
    name:string
    price:number
}

const book: item ={
    name:"ESSENTIAL IN TYPESCRIPT",
    price: 500
}

const fruit: item ={
    name:"apple",
    price: 250
}

console.log(`book name: ${book.name} , price : $${book.price}`);
console.log(`fruit name: ${fruit.name} , price : $${fruit.price}`);