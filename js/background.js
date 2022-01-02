const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = String(Math.floor(Math.random() * (images.length - 1)));

const style = document.body.style;
style.backgroundImage = "url(img/" + chosenImage + ".jpg)";
style.backgroundColor = "black";
style.backgroundSize = "100%, 100%";
style.backgroundRepeat = "no-repeat";
