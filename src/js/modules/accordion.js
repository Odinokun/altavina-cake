module.exports = function() {

  // begin accordion
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
  // end accordion

};