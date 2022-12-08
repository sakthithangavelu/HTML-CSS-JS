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
var empjson = '{ "name" : "Sakthi", "practice" : "LAMP",  "bay" : "Hercules"}';
var empobj  = JSON.parse(empjson);
console.log(empobj);

//Converting JavaScript object to JSON
const jsonData = { "name": "Sakthi", "age": 21 };
const obj = JSON.stringify(jsonData);
console.log(obj); 