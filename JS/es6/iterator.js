//for of

let marks = [100, 99,98,97,96,95];
for (let mrk of marks)
{
    console.log(mrk);
}


//[Symbol.iterator]()- used to retrieve an iterator object
//next()- returns an object with 'value' and 'done' properties.'done' is Boolean and returns true after reading all items in the collection

let mark = [56,57,58,59,60]
let iterates = mark[Symbol.iterator]();
console.log(iterates.next())
console.log(iterates.next())
console.log(iterates.next())
console.log(iterates.next())
console.log(iterates.next())
console.log(iterates.next())
// for (let i = 0;i<=mark.length;i++)
// {
//     console.log(iterates.next())
// }