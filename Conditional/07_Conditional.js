// show user a signout button if he is authenticated 
// otherwise show him option to login/signup

var authenticated = false;

// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("show login option");
// }

authenticated ? console.log("Sign out button") : console.log("Login Option");