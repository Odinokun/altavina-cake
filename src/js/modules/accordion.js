module.exports = function() {

  // begin accordion FAQ
  $('.faq-accordion__question').on('click', function() {
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).siblings('.faq-accordion__answer').slideUp();
    } else {
      $('.faq-accordion__question').removeClass('active');
      $('.faq-accordion__answer').slideUp();
      $(this).addClass('active');
      $(this).siblings('.faq-accordion__answer').slideDown();
    }
  });
  // end accordion FAQ

  // begin accordion RESULTS
  $('.results-accordion__date').on('click', function() {
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).siblings('.results-accordion__info-wrap').slideUp();
    } else {
      $('.results-accordion__date').removeClass('active');
      $('.results-accordion__info-wrap').slideUp();
      $(this).addClass('active');
      $(this).siblings('.results-accordion__info-wrap').slideDown();
    }
  });
  // end accordion RESULTS

};