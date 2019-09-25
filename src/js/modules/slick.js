module.exports = function() {

  // begin Slick slider

  $('#index-slider__list').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '25px'
        }
      }
    ]
  });

  // end Slick slider

};