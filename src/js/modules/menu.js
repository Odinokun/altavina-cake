module.exports = function() {

  // begin menu
  $('.header__burger-open').on('click', function() {
    $('#header__menu').slideDown();
  });
  $('.header__burger-close').on('click', function() {
    $('#header__menu').slideUp();
  });
  // end menu

};