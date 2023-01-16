// video link ->https://www.youtube.com/watch?v=DoIGxx7P-ps&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=53

// var returnValue = Math.max(2,5,7,8,9,3);
// console.log(returnValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3}, {z:4, y:5, x:7});
// console.log(myObj);


function sumOne(a,b) {
    return a+b;
}
// method -1   
//console.log(sumOne(5,4));
//-------------------------------------------------
// " Spread Operator"

var myA = [5,4];
//console.log(sumOne(myA)); //<- this will show undefined bcoz it don't know what is being pass to them (confused bwt Onject and array)

console.log(sumOne(...myA)); // <- this is spread operator, this spread the data as it is requried
//---------------------------------------------------
//  "Rest operator"

function sumTwo(...args){
    let sum =0;
    for(const arg of args){
        sum +=arg;
    }
    return sum;
}
console.log(sumTwo(7,8,9,6,2,1)); // <- this will sum all numbers passed through it without any limitation.


// "Extra concept -> if you want to modify upper function like that so it multiply first two numbers and sum up remaining numbers."
function sumMulti(a,b, ...args){
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum +=arg;
    }
    return [multi,sum];
}
console.log(sumMulti(8,9,5,6,3,2));