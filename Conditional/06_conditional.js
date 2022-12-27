// Allow user to access course if he is :
// logged in with goole
// logged in with facebook
// logged in with email.

var email = true;
var facebook =  true;
var google =  true;


if(email || facebook || google){
    console.log("Login Successfull");

}