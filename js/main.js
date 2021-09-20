$( function() {
    $( "#tabs" ).tabs();
  } );


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1,
        },
      }
    });
  });

  
  window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("nav");
  var sticky =  navbar.offsetTop;
  function myFunction(){
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky")
    }
    else 
    {
      nav.classList.remove("sticky");
    }
  };

 