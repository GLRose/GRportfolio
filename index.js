let titles = [
  "Breakfast Menu",
  "C++ Typing Game",
  "Web Scraper",
]

let images = [
  "./images/breakfast.png",
  "./images/typing-game.png",
  "./images/web-scraper.png",
];

let links = [
  "https://glrose.github.io/breakfast-picker/",
  "https://github.com/GLRose/typingGame",
  "https://github.com/GLRose/Runescape-Top100-Scraper"
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
