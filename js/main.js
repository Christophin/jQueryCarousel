function drawContainer()  {
    carouselImages.forEach(function(position)  {
      var image = "<div><img src=\"" + position.image_url + "\"/></div>";
      $(".container").append(image);
    });
};

drawContainer();

$(".container div").addClass("imgBox");

var currentImage = 0;
var images = $(".imgBox img");
var imgSelection = images.length;

var cycleImages = function()  {
  var image = images.eq(currentImage);
  images.removeClass("shown");
  image.addClass("shown");
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
