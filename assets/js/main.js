$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    })

  });

  var counter = $("#incre1").text();
  var counter2 = $("#incre2").text();
  var counter3 = $("#incre3").text();
  var counter4 = $("#incre4").text();
  var counter5 = $("#incre5").text();
  var counter6 = $("#incre6").text();
  var i = 0
  var i2 = 0
  var i3 = 0
  var i4 = 0
  var i5 = 0
  var i6 = 0
  $(document).ready(function() {

      $("#likes1").click(function(){

          while (i < 1) {
              counter++;
              i++
          }

          $("#incre1").text(counter);
      });
      $("#likes2").click(function(){

          while (i2 < 1) {
              counter2++;
              i2++
          }

          $("#incre2").text(counter2);
      });
      $("#likes3").click(function(){

          while (i3 < 1) {
              counter3++;
              i3++
          }

          $("#incre3").text(counter3);
      });
      $("#likes4").click(function(){

          while (i4 < 1) {
              counter4++;
              i4++
          }

          $("#incre4").text(counter4);
      });
      $("#likes5").click(function(){

          while (i5 < 1) {
              counter5++;
              i5++
          }

          $("#incre5").text(counter5);
      });
      $("#likes6").click(function(){

          while (i6 < 1) {
              counter6++;
              i6++
          }

          $("#incre6").text(counter6);
      });

  });
