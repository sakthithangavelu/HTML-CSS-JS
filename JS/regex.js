
/*            REGEX           */      //regex value is put inside backslash /regexvalue/

// var regex = /hi/i                  //i is for case insensitive
var regex = /hello/g                  //g means globally i.e return all similar regex value stored in a string
var str1="Welcome hi hello hello hello";


//exec()                           // returns index if the word is present in the string, returnss null if the word is not present in the string
// var output = regex.exec(str1);
// console.log(output)

//test()                              //returns only true or false based on the presence of the values
 var output = regex.test(str1);
 console.log(output);

 //match()                            //check for the value and returns how many times its diplayed in a array format
 var output = str1.match(regex);
 console.log(output);

 //replace
 var output = str1.replace(regex,"bye")
 console.log(output)                  //changes the value of regex with new word.if regex is declared i it will change only the first.
                                      //if the regex id declared g all values in a string are replaced.