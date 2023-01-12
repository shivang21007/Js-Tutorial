const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
 
// console.log(getBGColor(orange));

// this will show circle when goes to red .
// to know more about event listner go to mdn documentation event .


/*var Color = getBGColor(red);
red.addEventListener("mouseover", () => {
    center.style.backgroundColor = Color;
});
*/

//  style and getComputedStyle are two different things , when you want to impliment on style that is style and when you want to grab style then getComputedStyle. 

const magicColorChnager = (element, color) => {
    return element.addEventListener("mouseenter", () =>{
        center.style.backgroundColor = color;
    });

};

magicColorChnager(red, getBGColor(red));
magicColorChnager(cyan, getBGColor(cyan));
magicColorChnager(orange, getBGColor(orange));
magicColorChnager(violet, getBGColor(violet));
magicColorChnager(pink, getBGColor(pink));


 