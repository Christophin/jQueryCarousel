function drawContainer()  {
    carouselImages.forEach(function(position)  {
      var image = "<div><img src=\"" + position.image_url + "\"/></div>";
      $(".container").append(image);
    });
};

drawContainer();

var currentImage = 0;
var images = $(".container div");
var imgSelection = images.length;

var cycleImages = function()  {
  var image = images.eq(currentImage);
  images.css("display", "none");
  image.css("display", "inline-block");
}

cycleImages();

$('.next').click(function() {
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
