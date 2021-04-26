'use strict'

  $('.filter').hover(function(){
    $('.filcom',this).toggleClass('opa');
  });

$(window).on('scroll', function (){
  var menber = $('.menber');
  var isAnimate = 'isAnimate';
    menber.each(function () {
      var menberOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
        if(scrollPos > menberOffset - wh + (wh / 4) ){
          $(this).addClass(isAnimate);
    }
  });
});
