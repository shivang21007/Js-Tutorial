// "Borrow a method using bind" 
// video link -> https://www.youtube.com/watch?v=QoUboMfIemw&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=46

const hitesh = {
    firstName: "Hitesh",
    lastName: "Gupta",
    role: "Admin",
    coureCount: 3,
    getInfo: function () {
        console.log(`
    first name is ${this.firstName}
    last name is ${this.lastName}
    his role is ${this.role}
    and he is stuying ${this.coureCount} courses.
     `);
    },
}

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-Admin",
    coureCount: 4,
};

// hitesh.getInfo();
// dj.getInfo(); //-> here getInfo method is not defined in dj so it gives error.

// var djInfo = hitesh.getInfo.bind(dj);
// djInfo();
  //-> bind give you a reference , you have to call it manually.

hitesh.getInfo.call(dj);
// -> call direct call your method which you are pointing.

