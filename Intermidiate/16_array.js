var countries = ["India","USA","Japan","Russia"];
var states = new Array("Rajasthan","Delhi","Mumbai","Assam");

console.log(states[1]);
states[0]="Mirzapur";
console.log(states);

var user = ["Hitesh","histesh@gamil.com","4","67",true];
console.log(user);

user.pop();
user.pop();
console.log(user);

user.unshift("New City");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf("4"));
console.log(user.indexOf("abcd"));
console.log(Array.from("Shivang"));



