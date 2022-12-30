//Define a function that can answer the role of a user.
//admin-  get full access
// subadmin - get access to create / delete the course
// testprep - get access to test course 
// user - get access to watch course 
// other - trial user

// Input : getUserRole(name,Role)

let getUserRole = function (name, role) {
 switch (role) {
    case "admin":
        return `${name} is admin with full access.`;
        break;  // there is no need of break;

        case "subadmin":
        return `${name} is subadmin with access to create and delete course.`;
        break;  // there is no need of break;

        case "testprep":
        return `${name} is testprep with  access to test course.`;
        break;  // there is no need of break;

        case "User":
        return `${name} is user who watch the course.`;
        break;  // there is no need of break;
 
    default:
        return `${name} is trial user;`
        break;
 }    
}

console.log(getUserRole("shivang", "testprep"));

let getRole = getUserRole("shivang", "subadmin");

console.log(getRole);

