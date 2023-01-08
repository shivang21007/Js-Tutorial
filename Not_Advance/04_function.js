// Lexical Scoping

function init(){
    var firstName = "hitesh"
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
 }

 init();

 //console.log(firstName); // referenceError: firstName is not definedn bcoz scope of var is in function , so it will gic error.