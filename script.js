const text = document.getElementById("text");
const image = document.getElementById("image");
const button = document.getElementById("button");


/* Changing Text */

//text.innerHTML = "I have changed the text.";

/* var newText = "";  // use var when you will be changing the variable, else use const!
for (i = 0; i < 5; i++) {
    newText = newText + "#" + i + ", ";
    console.log(newText);
}
text.innerHTML = newText; */


/* Setting attributes */

// Normally you'd do this with CSS, but for demo purposes we will do it in JS!

//image.setAttribute("width", "100px");
//text.style.color = "orangered";  // #1af114 , but cannot do rgb
//text.setAttribute("color", "red"); // does not work!!


/* Event listeners */

const changeText = function(t) { // there are many ways to declare a function
    text.innerHTML = "I have changed the text.";
}

//button.addEventListener("click", changeText);

//button.addEventListener("onclick", function(){ alert("Hello World!"); }); 
