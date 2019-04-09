if(window.innerWidth>"960") {
    $(window).scroll(function(){
    $('.skills-bg').css({'top': $(window).scrollTop()/3});
    $('.contact-bg').css({'top': $(window).scrollTop()/3});
    $('.header-inset').css({'top': $(window).scrollTop()/1.2});
    $('.header-description').css({'top': $(window).scrollTop()/1.5});
  }).scroll();
}
    
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
                $('#back-top').css('visibility', 'visible');
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
                $('#back-top').css('visibility', 'hidden');
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });
	$(".nav-name").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.nav-name').fadeIn();
                $('.nav-name').css('visibility', 'visible');
                $('.nav-min').css('background-color','#221b23');
                $('#menu').css('color','#fff');
                $('#nav-block').css('width','10%');
            } else {
                $('.nav-name').fadeOut();
                $('.nav-name').css('visibility', 'hidden');
                $('.nav-min').css('background-color','transparent');
                $('#menu').css('color','#391c69');
                $('#nav-block').css('width','100%');
            }
        });

        $('.nav-name').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });
});

function PopUpShow(){
	$("#popup1").show(500);
	$(".b-popup").css('visibility', 'visible');

}
function PopUpHide(){
	$("#popup1").hide(500);
	$(".b-popup").css('visibility', 'hidden');
}

if(window.innerWidth>"590") {
	$("#download").html('<i class="fas fa-download"></i>CV');
}