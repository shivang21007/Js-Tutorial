console.log(this);

var user = {
    firstName : "Shivang Gupta",
    coursecount: 4,
    getCoursecount: function (){
        console.log("Line no. 7", this);
        function sayhello(){
            console.log("hello");
            console.log("line no. 10", this);
        }
        sayhello();
    },
}

user.getCoursecount();