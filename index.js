let titles = [
  "Nutrition Facts API",
  "React.js Breakfast Menu ",
  "Web Scraper for Runescape",
]

let images = [
  "./images/typing-game.png",
  "./images/breakfast.png",
  "./images/web-scraper.png",
];

let links = [
  "https://upc-nutrition-client.herokuapp.com/",
  "https://glrose.github.io/breakfast-picker/",
  "https://glrose.github.io/Top-100-Client/"
];

var changeProjectTitles = document.getElementById("project-titles");
var changeLink = document.getElementById("imgLink");
var changeImg = document.getElementById("imgClickAndChange");
var count = 0;

function next() {
  if (count >= images.length - 1) count = -1;
  count++;
  return setCardValues();
}

function prev() {
  if (count <= 0) count = images.length;
  count--;
  return setCardValues();
}

function setCardValues() {

  changeProjectTitles.innerHTML = titles[count];
  changeLink.href = links[count];
  return changeImg.src = images[count];
}
