// let phrase = "       I love India      "     ;
// console.log(phrase)
// console.log(phrase.trim())
// console.log(phrase.trimStart())
// console.log(phrase.replaceAll(" ",""))

// let sample = [1,2,3,4,5];
// console.log("The mul is :"+sample.map((a)=>a*2));
// console.log("The sum is: "+sample.reduce((a,b)=>a+b));

// let employee = {
//     name : "Sakthi",
//     bay  : "Hercules",
//     address : [
//         { city : "Chennai"},
//         {pincode : 600020}
//     ]
// }
// console.log(employee.address[1])


// function  sampleAdd(fname,lname)
// {
//     return(fname+lname)
// }
// console.log(sampleAdd("Sakthi","vel"));


let names = new Map();
names.set("Sakthi",1)
names.set("Vel",2)
names.set("Sri",3);
console.log(names);
console.log(names.get("Sakthi"))
console.log(names.size);
console.log(names.size==3);
names.delete("Sri")
console.log(names);
names.clear();
console.log(names)

