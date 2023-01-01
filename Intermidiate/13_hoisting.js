/*
1) Function declaration are scanned and made available.
2) variable declaration are scanned and made undefiend .

it mean if u declare any function although you can call it before function , but if you declare any variable then you have to call it below variable defination .

 */
console.log(name);
var name = "shivang";

function sayMyName(){
    var name = "papa";
    console.log(name);
}
sayMyName();
console.log(name);

