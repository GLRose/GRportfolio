let images = [
    "./images/Breakfast.png",
    "./images/TypingGame.png",
    "./images/WebScraper.png",
  ];

  var changeImg = document.getElementById("imgClickAndChange");
  var count = 0;

  function next() {
    if (count >= images.length - 1) count = -1;
    count++;
    return setImg();
  }
  
  function prev() {
    if (count <= 0) count = images.length;
    count--;
    return setImg();
  }

  function setImg() {
    return changeImg.src = images[count];
  }