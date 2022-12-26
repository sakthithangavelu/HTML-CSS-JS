//regular function
// const square = function(number)
// {
//     return number*number;
// }

// Arrow function
// const square = (number) => number*number;
// console.log(square(2));

const jobs = [
    {id : 1, isActive: true},
    {id : 2, isActive: true},
    {id : 3, isActive: false},
];
const activeJob = jobs.filter(jobs => jobs.isActive);

