//admin get full access
// subadmin - get access to create / delete the course
// testprep - get access to test course 
// user - get access to watch course 


var user = "abc";
switch (user) {
    case "admin":
        console.log("You are Admin and get full access");
        break;

        case "subadmin":
        console.log("You are subadmin and get access to create / delete the course")
        break;

        case "testprep":
        console.log("You are testprep and get access to test course")
        break;

        case "user":
        console.log("You are user and get access to watch course")
        break;

    default:
        console.log("trial user");
        break;
}