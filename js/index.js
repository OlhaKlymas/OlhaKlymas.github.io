if(window.innerWidth>"960") {
    $(window).scroll(function(){
    $('.skills-bg').css({'top': $(window).scrollTop()/3});
    $('.contact-bg').css({'top': $(window).scrollTop()/3});
  }).scroll();
}
    $(window).scroll(function(){
    $('.header-inset').css({'top': $(window).scrollTop()/1.2});
    $('.header-description').css({'top': $(window).scrollTop()/1.5});
  }).scroll();
    
  setTimeout(function() {
    $('.about-text').css('animation-duration', '0.5s');
    $('.about-text').css('-webkit-animation-duration', '0.5s');
    $('.about-text').css('animation-name', 'my-opacity-transform');
    $('.about-text').css('-webkit-animation-name', 'my-opacity-transform');
    $('.about-text').css('animation-timing-function', 'ease');
    $('.about-text').css('-webkit-animation-timing-function', 'ease');
    $('.about-text').css('visibility', 'visible');
  }, 1000);

		// Изотоп
let $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    category: '[data-category]'
  }
});
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});
$('#sorts').on( 'click', 'button', function() {
  var filterValueS = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValueS });
});
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});
		// Owl Carousel
$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
    smartSpeed: 2000,
  });
});
		// button-top
$(document).ready(function () {

    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });

});
