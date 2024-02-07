let black=document.getElementById("black");
let blue=document.getElementById("blue");
let red=document.getElementById("red");
let yellow=document.getElementById("yellow");

let bdy=document.body;

black.addEventListener("click", ()=>{
    console.log("black clicked");
    // bdy.classList.remove("body");
    // bdy.classList.add("c1");
    bdy.style.backgroundColor="black";
});

blue.addEventListener("click", ()=>{
    console.log("blue clicked");
    // bdy.classList.remove("body");
    // bdy.classList.add("c2");
    bdy.style.backgroundColor="blue";
});

red.addEventListener("click", ()=>{
    console.log("red clicked");
    // bdy.classList.remove();
    // bdy.classList.add("c3");
    bdy.style.backgroundColor="red";
});

yellow.addEventListener("click", ()=>{
    console.log("yellow clicked");
    bdy.style.backgroundColor="yellow";
});
