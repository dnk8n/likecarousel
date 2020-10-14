import { Carousel } from "./carousel.js";

function* cardGenerator(cardClass) {
  while (true) {
    const card = document.createElement("img");
    const width = Math.floor(window.devicePixelRatio * (board.clientWidth - 100));
    const height = Math.floor(window.devicePixelRatio * (board.clientHeight - 100));
    const random = Math.round(Math.random() * 1000000);
    const srcUrl = `https://picsum.photos/${width}/${height}?random=${random}`;
    const proxyUrl = `https://img.dnk8n.dev/api?width=${width}&height=${height}&url=${srcUrl}`;
    const altTitle = `Random image sized at ${width}x${height}`

    card.classList.add(cardClass);
    card.src = proxyUrl
    card.alt = altTitle
    card.title = altTitle

    yield card;
  }
}

const board = document.querySelector("#board");
const cardClass = "card";
const cardGeneratorObj = cardGenerator(cardClass);

new Carousel(board, cardClass, cardGeneratorObj);
