// JSON object
/*const data = {
    "name": "Sakthi",
    "age": 21,
    "hobby": {
	         "reading" : true,
	         "gaming" : false,
	         "sport" : "football"
             },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); 
console.log(data.hobby);
console.log(data.hobby.sport);
console.log(data.class[1]);*/


//converting JSON to js objects
var jsonData = '{ "name" : "Sakthi", "practice" : "LAMP",  "bay" : "Hercules"}';
var jsData  = JSON.parse(jsonData);
console.log(jsData);

//Converting JavaScript object to JSON
const jsData = { name: "Sakthi", age: 21 };
const jsonData = JSON.stringify(jsData);
console.log(jsonData); 