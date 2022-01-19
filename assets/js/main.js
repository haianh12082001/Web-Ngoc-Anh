$(document).ready(function () {
    $('.enterprise .list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,  
                }
            }
        ]
    });

    $('.bar-mobi').click(function () {
        $('.bar-mobi').toggleClass("show-menu");
        $('.header-menu').toggleClass("show-menu");
    });
})

window.onscroll = function(){scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // document.getElementById("header").style.background = 'white';
        document.getElementById("header").classList.add("scoll-menu")
    } else {
        //   mybutton.style.display = "none";
        document.getElementById("header").classList.remove("scoll-menu")
        // document.getElementById("header").style.background = 'transparent';
    }
}

function tool(){
    if($(window).width() < 1024){
      $('.box-address').each(function(index, el) {
        if(index !== 0 ) {
          $(this).removeClass('act');
        }
      });
      $('.box-address').on('click', function(event) {
        event.preventDefault();
        $('.box-address').removeClass('act');
        $(this).addClass('act');
      });
    }else{
      $('.box-address').hover(function() {
        $('.box-address').removeClass('act');
        $(this).addClass('act');
      }, function() {
        /* Stuff to do when the mouse leaves the element */
      });
   }
  }
  
  tool();