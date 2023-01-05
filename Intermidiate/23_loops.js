const names = [
    "Youtubr",
    "facebook",
    "instagram",
    "Netflix",
    "AMazon",
]
// "for of " used for arrays "
for (const n of names){
    console.log(n);
}



const symbols ={
    yt : "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline",
}
// "for In" used for Objects
for(const n in symbols){
    // console.log(symbols[n]);
    console.log(`the key : ${n} stand for : ${symbols[n]}`);
}