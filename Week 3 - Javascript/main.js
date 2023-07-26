const heading = document.querySelector("h1");
heading.textContent = "Hello World this is from Javascript!";


let myVariable = "Bob";

let myVariableNumber = 10;

let myVariableBoolean = true;


let myVariableArray = [1,'Bob','Steve',10];

const heading2 = document.querySelector("h2");

let value = myVariableArray[0]

heading2.textContent = value;


/*
Everything in between is a comment.
*/

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }


const heading3 = document.querySelector("h3");
heading3.textContent = multiply(4, 7);



document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "html5.png") {
    myImage.setAttribute("src", "javascript.png");
  } else {
    myImage.setAttribute("src", "html5.png");
  }
};
