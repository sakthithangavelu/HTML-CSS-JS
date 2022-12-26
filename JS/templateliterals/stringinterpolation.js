const name = "Sakthivel";
console.log(`Hi, ${name}`); //interpolation

//With template literals, you can use both single and double quotes inside a string
let bay = `I am at "Hercules Bay"`;
console.log(bay)

//Template literals allows multiline strings
const desc = `Hi I am Sakthivel
Working at Aspire Systems 
Located near Siruseri`;
console.log(desc);

//raw()

// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);
