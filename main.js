import { Carousel } from "./carousel.js";

function* cardGenerator(cardClass) {
  while (true) {
    const card = document.createElement("div");
    const width = window.devicePixelRatio * (board.clientWidth - 100);
    const height = window.devicePixelRatio * (board.clientHeight - 100);
    const random = Math.round(Math.random() * 1000000);
    const srcUrl = `https://picsum.photos/${width}/${height}?random=${random}`;
    const proxyUrl = `https://img.dnk8n.dev/api?width=${width}&height=${height}&url=${srcUrl}`;

    card.classList.add(cardClass);
    card.style.backgroundImage = `url(${proxyUrl})`;

    yield card;
  }
}

const board = document.querySelector("#board");
const cardClass = "card";
const cardGeneratorObj = cardGenerator(cardClass);

new Carousel(board, cardClass, cardGeneratorObj);
