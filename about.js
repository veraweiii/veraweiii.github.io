const carouselImg = document.getElementById("carousel-img");
const carouselNext = document.getElementById("carousel-next");
const carouselPrev = document.getElementById("carousel-prev");

//array of all carousel items
const carouselImgArray = [
    "img/original.png",
    "img/pumpkin-spice.png",
    "img/blackberry.png",
    "img/walnut.png",
    "img/caramel-pecan.png",
    "img/gluten-free.png",
  ];
  
  // update carousel
  let index = 0;
  let input;
  const carouselSwitch = (e) => {
    if (e == null) {
      input = "carousel-next";
    } else {
      input = e.target.parentNode.id;
    }
  
    if (input == "carousel-next") {
      if (index == carouselImgArray.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else {
      if (index == 0) {
        index = carouselImgArray.length - 1;
      } else {
        index--;
      }
    }
    carouselUpdateImage();
  };
  
  // Switch carousel slides automatically
  
  function carouselAuto () {
    if (index == carouselImgArray.length - 1) {
      index = 0;
    } else {
      index++;
    }
    carouselUpdateImage();
    setTimeout(carouselAuto, 2000);
  };
  
  function carouselUpdateImage() {
    carouselImg.src = carouselImgArray[index];
  };
  
  carouselNext.addEventListener("click", carouselSwitch);
  carouselPrev.addEventListener("click", carouselSwitch);
  setTimeout(carouselAuto, 3500);
