"use strict";

const button = document.querySelector("button");

function greet() {
  const name = prompt(`What is your name?`);
  alert(`Naber ${name}! Iyi ki bastin bana! :)`);
}

button.addEventListener("click", greet);
