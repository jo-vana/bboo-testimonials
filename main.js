

$(document).ready(function(){
  jQuery('#testimonial-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      cssEase: 'linear',
      speed: 1000,
      mobileFirst:true,
      centerMode: true,
     centerPadding: '0',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    jQuery('#owl-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      cssEase: 'linear',
      speed: 1000,
      mobileFirst:true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
})
  
  // Slick Scroll
  // jQuery(function () {
  //   const slider = jQuery(".slick-slider");
  //   slider;
  
  //   slider.on("wheel", function (e) {
  //     e.preventDefault();
  
  //     if (e.originalEvent.deltaY < 0) {
  //       jQuery(this).slick("slickNext");
  //     } else {
  //       jQuery(this).slick("slickPrev");
  //     }
  //   });
  // });
  
  // var wheel, scrolling;
  // var $carousel = jQuery('#owl-slider');
  // $carousel.on('init', () => {
  // 	wheel = new WheelIndicator({
  // 		elem: $carousel[0],
  // 		callback: wheelHandler,
  // 	});
  // })
  // .on('beforeChange', () => {
  // 	scrolling = true;
  // })
  // .on('afterChange', () => {
  // 	scrolling = false;
  // })
  
  // function wheelHandler(e) {
  // 	if (!scrolling) {
  // 		console.log('Mouse wheel scroll:', e.direction);
  // 		$carousel.slide(e.direction === 'up' ? 'slickPrev' : 'slickNext');
  // 	}
  // }
  
  jQuery(document).ready(function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 300);
    }
  });