// function init(){
//     var firstName = "hitesh"
//     console.log("I am Sivang");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
//  }

// var Values = init();
// Values();

function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(5));  // Method 1

console.log(doAddition(4)(5)); // method 2

//doAddition()()() // curring - Topic