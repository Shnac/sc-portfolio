$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var transparentDiv = $(".transparent-div");

    if (scrollPos > 100) {
      transparentDiv.addClass("scroll");
    } else {
      transparentDiv.removeClass("scroll");
    }
  });
});
