$(document).ready(function() {
  //CAROUSEL
    //add more images here
    var imageURLSBio = [
      'bio1.jpg',
      'bio2.jpg',
      'bio3.jpg'
    ];
    var imagePositionBio = 1;
    setInterval(function() {
      if(imagePositionBio == imageURLSBio.length)
      {
        imagePositionBio = 0;
      }
      $("#bioImage").animate({
        opacity: "0"
      }, 1000, function() {
        $("#bioImage").css("background-image", "url('images/" + imageURLSBio[imagePositionBio] + "')");
        imagePositionBio++;
      });
      $("#bioImage").animate({
        opacity: "1.0"
      }, 1000);
    }, 7000);
    //END OF CAROUSEL
  
    //CAROUSEL
    //add more images here
    var imageURLSMain = [
      'actor3.jpg',
      'actor1.jpg',
      'actor2.jpg',
    ];

    setInterval(function() {
      if(imagePositionMain == imageURLSMain.length)
      {
        imagePositionMain = 0;
      }
      $("#profileImage").animate({
        opacity: "0"
      }, 1000, function() {
        $("#profileImage").attr("src", "images/" + imageURLSMain[imagePositionMain]);
        imagePositionMain++;
      });
      $("#profileImage").animate({
        opacity: "1.0"
      }, 1000);
    }, 7000);
    //END OF CAROUSEL
    //Place starting image and description
    var imagePositionMain = 1;
    $("#jumbo").animate({
      marginTop: "+=10px",
      opacity: "1.0"
    }, 1000, function() {
      $("#outerImageDiv").animate({
        marginLeft: "0px",
        opacity: "1.0"
      }, 1200 );
      $("#outerHomeText").animate({
        marginRight: "0px",
        marginLeft: "0px",
        opacity: "1.0"
      }, 1200, function() {
        $("#bioDesc").animate({
          top: "+=50px",
          opacity: "1.0"
        }, 1000 , "swing");
        $("#bioImage").animate({
          opacity: "1.0"
        }, 1000);
      });
    });
  
  $('.navicon').on('click', function(){
    $('.mainNavDropDown').slideToggle(500);
   });
});