// Preloader
let preloader = document.querySelector(".preloader");
function loading() {
  preloader.style.display = "none";
}
// Image loading
let loadImage = document.querySelector(".imgLoadingStatus");
function imgLoading() {
  loadImage.style.display = "none";
}

// Slider
let i = 0;
let slider = document.querySelector("#slider");
let lBtn = document.querySelector("#left-btn");
let rBtn = document.querySelector("#right-btn");
let sliderImg = document.querySelector("#slide__img");
let imgSrc = sliderImg.getAttribute("src");
let images = [
  "img/p1.jpg",
  "img/p2.jpg",
  "img/p3.jpg",
  "img/p4.jpg",
  "img/p5.jpg",
];

//Next image function
function next() {
  i++;
  if (i < images.length) {
    lBtn.style.visibility = "visible";
    sliderImg.setAttribute("src", images[i]);
  } else if (i >= images.length) {
    rBtn.style.visibility = "hidden";
    i = images.length - 1;
  }
}

//Previous image function
function pre() {
  i--;
  if (i >= 0) {
    lBtn.style.visibility = "visible";
    rBtn.style.visibility = "visible";
    sliderImg.setAttribute("src", images[i]);
  } else if (i < 0) {
    i = 0;
    lBtn.style.visibility = "hidden";
    rBtn.style.visibility = "visible";
  }
}
