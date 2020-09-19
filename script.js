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

const changeText = function(t) { // there are many ways to declare a function
    text.innerHTML = "I have changed the text.";
}
