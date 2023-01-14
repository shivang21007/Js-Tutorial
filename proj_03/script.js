// Video link -> https://www.youtube.com/watch?v=fEj0IsPa37M&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=48

const course = [
    {
        name: "Complete JavaScript course",
        price: "2.2",
    },
    {
        name: "Complete MERNJs course",
        price: "2.5",
    },
    {
        name: "Complete AngularJs course",
        price: "2.3",
    },
    {
        name: "Complete ReactJs course",
        price: "2.2",
    },
    {
        name: "Complete C++ course",
        price: "2.1",
    },
    {
        name: "Complete ExpressJs course",
        price: "2.4",
    },
];

/* 
<li class="list-group-item">
Complete C++ course
<span class="float-right">$2.8</span></li>
 */


function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    course.forEach(course => {

        const li = document.createElement("li");
         li.classList.add("list-group-item");

         const name = document.createTextNode(course.name);
         li.appendChild(name);

         const span = document.createElement("span");
         span.classList.add("float-right");

         const price = document.createTextNode("$" + course.price);
         span.appendChild(price);

         li.appendChild(span);
         ul.appendChild(li);
    });
}

// generateList();

window.addEventListener("load", generateList);

const button1 = document.querySelector(".btn-success");
button1.addEventListener("click", () => {
    course.sort( (a,b) =>  a.price - b.price);
    generateList();
});

const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
    course.sort( (a,b) =>  b.price - a.price);
    generateList();
});