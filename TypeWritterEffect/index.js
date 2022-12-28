// const textElement = document.getElementById("text");
// const speedController = document.getElementById("speed");

// let index = 1;
// let time = 500 / speedController.Value;

// let myText = "hello learners!!! Welcome To The World Of Css";
// speedController.addEventListener("change", (e) => {
//   time = e.target.Value;
// });

// function automaticText() {
//   textElement.innerText = myText.slice(0, index);
//   index++;
//   if (index > myText.length) {
//     index = 1;
//   }
//   setTimeout(automaticText, time);
// }
// automaticText();

const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");

let index = 1;
let time = 500 / speedElement.value;

const someText = "I am doing Javascript";

speedElement.addEventListener("change", (e) => {
  time = 500 / e.target.value;
});

function automaticText() {
  textElement.innerText = someText.slice(0, index);

  index++;

  if (index > someText.length) {
    index = 1;
  }

  setTimeout(automaticText, time);
}
automaticText();
