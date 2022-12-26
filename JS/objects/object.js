 //creating object with literal method
var bird = {
    bird_name : "Parrot",
    bird_color : "Green",
    bird_price : 1000,

    birdShop : function()
    {
        document.write("Purchase this green parrot with discount")
    }
}
bird.birdShop();
document.write(bird.bird_color);


bird.bird_size = "small";          //declaring new objects anywhere afterwards in the code 
//delete bird.bird_size;           //deleting a object value
document.write(bird.bird_size);



bird.newbirdShop = function()      // creating new function for the same object
{
    return("New function  is created in the object bird");
}
document.write(bird.newbirdShop());


//creating object using constructor function

// function bird(bird_name,bird_color,bird_price)
// {
//     this.bird_name = bird_name;
//     this.bird_color = bird_color;
//     this.bird_price = bird_price;

//     this.bird = function()
//     {
//         document.write("Birds are sold here");
//     }
// }
// var b1 = new bird ("Parrot","green","1000")
// b1.bird();
// document.write(b1.bird_color);


//Nested objects

myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

//Nested Arrays and Objects

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  