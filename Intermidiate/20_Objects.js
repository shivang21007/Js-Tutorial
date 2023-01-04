var user = {
    firstName : "Shivang",
    lastname : "Gupta",
    role : "Admin",
    loginCount : 54,
    googleSignIn : true,
    courseList: [],

    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },

    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`

    },

 /*   userInfo: function (){
        return `
        User Name is ${this.firstName} ${this.lastname}.,
        User role is ${this.role}.,
        User login count is ${this.loginCount}.,
        User purchased course are -
         ${this.courseList}.
        `
    },
    */
 };
//  var courselist = true ;
 console.log(user.getCourseCount());
 user.buyCourse("react course");
 user.buyCourse("angular course");
 console.log(user.getCourseCount());
 console.table(user.courseList);
//  console.table(user.userInfo());

