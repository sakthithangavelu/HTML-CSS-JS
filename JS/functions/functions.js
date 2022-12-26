//  function sumfunction()  //without parameters
//  {
//     var a = 10,
//         b = 20,
//         c = a + b;
//     document.write(c);    
//  }
//  sumfunction();    //function call




// function sumfunction(x,y)  //with parameters
// {
//     var sum = x + y;
//     document.write(sum)
// }
// sumfunction("Hi Mr. ","Sakthivel")



// function sumfunction(x,y)  //use return to use the output out of the function
// {
//     let sum = x + y;
//     return sum;
// }
// let output = sumfunction("Hi Mr. ","Sakthivel");
// document.write(output);


/* Default parameters */

function bookStore(name = "Higginbothams")
{
    console.log(`Hello ${name}`)
}
bookStore("odyssey");
bookStore();