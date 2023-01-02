// Method 1
// function isEven(element){
//     if( element % 2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(4));

//method 2
// function isEven(element){
//     return element % 2 ===0;
// } console.log(isEven(6));

//method 3
// let isEven = (element) => {
//     return element % 2 ===0;
// }; console.log(isEven(2));


// call back functions 
// var result = [2,4,6,8].every(isEven);
// console.log(result);

//Mordern Call back 
var result = [2,4,8,6].every((e) => (e % 2 === 0));
console.log(result);