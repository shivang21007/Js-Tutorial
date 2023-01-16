class User {
    constructor(name, email){
        this.name = name ;
        this.email = email;
    }
    #courseList = []; // <- this is how we private things in classes using "#".

    getInfo(){
        return { name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    // static login(){
    //     return "You are loggedin";
    // } 
    // <- if we put static here then we can access it from it's original class not from inherite class.
    login(){
        return "You are loggedin";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am SubAdmin";
    }
    login(){
        return "login for only admin";
    }
}

module.exports = User;


const rock = new User("rock","rock@lco.dev");
console.log(rock.getInfo());
rock.enrollCourse("Angular BootCamp");
console.log(rock.getCourseList());
// console.log(rock.courseList); //<- if this element is not private then we can asses it but it is private so it will show undefined.


const tom =  new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());