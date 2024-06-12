/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //variables
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  //funciones
  function generadorDeAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generadorDeExcusa() {
    const randomWho = generadorDeAleatorio(who);
    const randomAction = generadorDeAleatorio(action);
    const randomWhat = generadorDeAleatorio(what);
    const randomWhen = generadorDeAleatorio(when);
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  document.getElementById("excuse").innerHTML = generadorDeExcusa();
};
