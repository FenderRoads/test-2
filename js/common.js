document.addEventListener("DOMContentLoaded", function() {

  $('.input').on('input', function(){
    var $this = $(this);
    if ($this.val() == '') {
        $this.removeClass('input-filled');
    } else {
        $this.addClass('input-filled');
    }
  });

  $(".nav-item-info").click(function() {
    scrollTo("#info")
  });

  $(".nav-item-exp").click(function() {
    scrollTo("#exp")
  });

  $(".nav-item-js").click(function() {
    scrollTo("#js")
  });

  $(".nav-item-aboutme").click(function() {
    scrollTo("#aboutme")
  });
  
  function scrollTo(el) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(el).offset().top
    }, 1000);
  }

  $('.nav-item-info').on('click', function() {
    document.getElementById("test").scrollIntoView();
  });

  $('.js-yearofbirth').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    dropdownCssClass: 'yearofbirth-inner'
  });
  
  $('.hamburger').on('click', function() {
    $('.hamburger-menu').toggleClass('hamburger-menu-active')
  });

  $('.js-range-slider').ionRangeSlider({
    min: 0,
    max: 4,
    from: 2
  });

});
