// link -> https://www.youtube.com/watch?v=IH7TJla_rwY&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=42
// this another method to define objects.
var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    },
};

var hitesh = Object.create(User);
console.log(hitesh); // <- run this on browser to know that is assign to you or not.
hitesh.name = "Hitesh Choudhary";
hitesh.getUserName();


var sam = Object.create(User, {
    name: {value: "Sammy"},
    courseCount: {value: 3},
});

sam.getUserName();


