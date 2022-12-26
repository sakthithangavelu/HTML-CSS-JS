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


// let names = new Map();
// names.set("Sakthi",1)
// names.set("Vel",2)
// names.set("Sri",3);
// console.log(names);
// console.log(names.get("Sakthi"))
// console.log(names.size);
// console.log(names.size==3);
// names.delete("Sri")
// console.log(names);
// names.clear();
// console.log(names)

           //program without map

// const Array = [1,2,3,4,5]
// for(let i=1;i<6;i++)
// {
// let multi = i*2
// console.log(multi);
// }


           //Anonymous function

// const greet = function () {
//     console.log("Welcome");
// }
// greet();

           //Anonymous function using aroow fnction

//  (() => console.group("Welcome"))
//  ();



            //Swapping two numbers

// let a = prompt("Enter 1st number:")
// let b = prompt("Enter 2nd number:")

// let temp;
// temp = a;
// a = b;
// b = temp;

// document.write(`After Swap A : ${a}`)
// document.write(`After swap B : ${b}`)


             //static properties and methods in javascript


// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//       return 'static method has been called.';
//     }
//     static {
//       console.log('Class static initialization block called');
//     }
//   }
  
//   console.log(ClassWithStaticMethod.staticProperty);
//   console.log(ClassWithStaticMethod.staticMethod());
  



        //to repeat a string

// let Name = "Sakthi"
// console.log(Name.repeat(10))

            //endswith

// let phrase = "Learning Javascript"
// console.log(phrase.endsWith("Javascript"))


// class StaticMember{
//    static Phrase(){
//     console.log("Welcome ")
//    }
//    static name = "Sakthi";
  
// }

// const obj = new StaticMember();
// console.log(StaticMember.Phrase())
// console.log(StaticMember.name)


