var randomNumber;

function startBody() {
  // let timeInterval = 3000;
  changeBackgroundImage();
  // console.log(window);
  // interval = setInterval(changeBackgroundImageSlowly, timeInterval);
}

function returnRandomNumber() {
  const imgCount = 4;
  return Math.floor(Math.random() * imgCount) + 1;
}

function checkWindowSize() {
  const windowSize = 601;
  window.innerWidth >= windowSize
    ? (document.body.style.backgroundImage =
        "url(img/pagaidu_lapa/rotala_background_desktop" +
        randomNumber +
        ".jpg)")
    : (document.body.style.backgroundImage =
        "url(img/pagaidu_lapa/rotala_background_mobile" +
        randomNumber +
        ".jpg)");
}

window.addEventListener("resize", function () {
  checkWindowSize();
  // let timeInterval = 3000;
  // clearInterval(interval);
  // document.body.style.transition = "0s";
  // changeBackgroundOnResize();
  // interval = setInterval(changeBackgroundImageSlowly, timeInterval);
});

function changeBackgroundImage() {
  randomNumber = returnRandomNumber() || 1;
  // if (typeof randomNumber === "undefined") {
  //   randomNumber = 1;
  // }
  checkWindowSize();
  // randomNumberValue = randomNumber;
}

// function changeBackgroundOnResize() {
//   checkWindowSize();
// }

// function changeBackgroundImageSlowly() {
//   while (randomNumber == randomNumberValue) {
//     randomNumber = returnRandomNumber();
//   }
//   if (typeof randomNumber === "undefined") {
//     randomNumber = 1;
//   }
//   document.body.style.transition = "2s";
//   document.body.style.transitionTimingFunction = "ease-in-out";
//   checkWindowSize();
//   randomNumberValue = randomNumber;
// }
