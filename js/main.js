var currentImage = 0;
var imgSelection = carouselImages.length;


var cycleImages = function()  {
  var imgUrl = carouselImages[currentImage].image_url;
  $(".container").css("background-image", `url(${imgUrl})`);
}

cycleImages();

$('.next').click(function() {
  console.log("skdfbskf")
  currentImage += 1;
  if (currentImage > imgSelection - 1) {
    currentImage = 0;
  }
  cycleImages();
});

$('.prev').click(function() {
  currentImage -= 1;
  if (currentImage < 0) {
    currentImage = imgSelection - 1;
  }
  cycleImages();
});
