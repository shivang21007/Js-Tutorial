// these are falsey values
// means if yout use these type it will return false 
// 1) undefined
// 2) null
// 3) 0
// 4) ''
// 5) NaN

// Java Script some time assume it's owen just like here 
// 2 is integer and "2" this is string but we use 
// == that means its loosely compare and ( 2 == "2") will return true 
// but if we use === its strongly compare and ( 2 == "2") will return false 

let user = "2";

if(2 == user){
    console.log("This is ture ");

}else{
    console.log("This is false");
}

