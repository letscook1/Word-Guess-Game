//Beginning Slide Show

var i = 0; //start point
var images = []; //images array
var time = 3000; //time between switch

//image list
images[0] = "assets/images/slide1.jpg";
images[1] = "assets/images/slide2.jpg";
images[2] = "assets/images/slide3.jpg";
images[3] = "assets/images/slide4.jpg";
images[4] = "assets/images/slide5.jpg";
images[5] = "assets/images/slide6.jpg";
images[6] = "assets/images/slide7.jpg";
images[7] = "assets/images/slide8.jpg";
images[8] = "assets/images/slide9.jpg";

//change image
function changeImg() {
  document.slide.src = images[i];

  //check if index is under max

  if (i < images.length - 1) {
    //ad 1 to index
    i++;
  } else {
    //reset back to 0
    i = 0;
  }
  //run function every x seconds
  setTimeout("changeImg()", time);
}

//run function when page loads
window.onload = changeImg;
