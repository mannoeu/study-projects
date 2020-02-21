var onTop = false;
$(window).scroll(function () {
  let scrollPos = $(window).scrollTop();

  if (scrollPos < 660 && !onTop) {
    onTop = true;
    $('.menu').addClass('onTop');
  }

  if (scrollPos > 660 && onTop) {
    onTop = false;
    $('.menu').removeClass('onTop');
  }
});