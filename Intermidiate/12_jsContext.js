// sayHello();

// function sayHello(){
//     console.log("Hi this is global context.")
// }

let myName="Shivang";

if(myName === Window.myName){
    console.log("This is true method");
}else{
    console.log("This is Wrong method");
}
// this is just example of global contyext that 
// this run perfectly in Browser bcoz of Windows global keyword but Nodejs doesnot recognise this.