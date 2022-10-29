/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  let newNumber = document.querySelector(".number");
  let newTopSuit = document.querySelector(".top-suit");
  let newBottomSuit = document.querySelector(".bottom-suit");

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function card() {
    let number = numbers[randomCard(numbers)];
    let suit = suits[randomCard(suits)];
    newNumber.innerHTML = number;
    newTopSuit.innerHTML = suit;
    newBottomSuit.innerHTML = suit;
  }

  card();
};
