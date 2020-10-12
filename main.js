import { Carousel } from "./carousel.js";

function* cardGenerator() {
  while (true) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage =
      "url('https://picsum.photos/320/320/?random=" +
      Math.round(Math.random() * 1000000) +
      "')";
    yield card;
  }
}

const board = document.querySelector("#board");
const cardClass = "card";
const cardGeneratorObj = cardGenerator();

new Carousel(board, cardClass, cardGeneratorObj);
