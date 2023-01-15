// Maps in Javascript 
// video link -> https://www.youtube.com/watch?v=fMfMdE3wifs&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=51


var mymap = new Map();

mymap.set(1,"Uno");
mymap.set(2,"dos");
mymap.set(3,"Tres");
mymap.set(4,"Cautro");
console.log(mymap);

// for(let key of mymap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of mymap.values()) {
//     console.log(`value is ${value}`);
// }

for (let [key, value] of mymap) {
    console.log(`key is : ${key}and Value is : ${value}`);
}

// mymap.forEach ((value) => console.log(`${value}`));

mymap.forEach ((v, k) => console.log(`${v} and key is ${k}`));

mymap.delete(2);
console.log(mymap);