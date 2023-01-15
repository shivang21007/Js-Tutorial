 // Destructure the data in javascript

 //-------------------------------------------
 //  "For Array"

// const user = ["hitesh",3,"admin"];
// var role = user[2];
// var name = user[0];
// // console.log(name);

// var [name,courseCount, role] = user;
// console.log(role);

//---------------------------------------------
// "For Object"

const MyUser = {
    name : "Hitesh",
    courseCount: 5,
    role: "Admin",
};

// Method -1
// console.log(MyUser.courseCount);

//Method -2
const {name, courseCount, role} = MyUser;
console.log(courseCount);
