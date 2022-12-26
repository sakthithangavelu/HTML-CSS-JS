//Shorthand for Initializing Properties

/*ES5
  function getLaptop(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    }
}
getLaptop("Apple", "MacBook", "2015");
*/

//ES6
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}

getLaptop("Apple", "MacBook", "2015");


//Shorthand for writing Methods


  //ES5
 /*
  function getLaptop(make, model, year) {
    return {
       sayModel : function() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel();
*/


//ES6
function getLaptop(make, model, year) {
    return{
        sayModel() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel();