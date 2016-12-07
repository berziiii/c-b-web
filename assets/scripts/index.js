'use strict';
$(document).ready(function() {

  // Loading Section
  setTimeout(function(){
          $('#section-right').addClass('slide-right');
          $('#section-left').addClass('slide-left');
          $('#loading-icon').addClass('fade-out');
  }, 2000);


  $('.line-1').css('opacity', '1');
  $('.line-2').css('opacity', '1');
  $('.line-3').css('opacity', '1');

  $(window).ready(function() {
    if($(this).scrollTop() !== 0) {
      $('nav.light span').css('color', '#fff');
      $('nav.light li a').css('color', '#fff');
      $('span a.logo').css('color', '#fff');
      $('a:hover').css('color', '#fff');
      $('.transparent').css('background-color', '#022648');
      $('.line-1').css('opacity', '1');
      $('.line-2').css('opacity', '1');
      $('.line-3').css('opacity', '1');
    }
  });

  $(window).scroll(function() {
    if($(this).scrollTop() === 0) {
      $('nav.light span').css('color', '#fff');
      $('nav.light li a').css('color', '#fff');
      $('span a.logo').css('color', '#fff');
      $('.transparent').css('background', '0 0');
      $('.line-1').css('opacity', '1');
      $('.line-2').css('opacity', '1');
      $('.line-3').css('opacity', '1');
    } else {
      $('nav.light li a').css('color', '##fff');
      $('nav.light span').css('color', '#fff');
      $('span a.logo').css('color', '#fff');
      $('.transparent').css('background-color', '#022648');
      $('.line-1').css('opacity', '1');
      $('.line-2').css('opacity', '1');
      $('.line-3').css('opacity', '1');
    }
  });


  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.mobile-toggle').on('click', function() {
    $('#responsive-nav').addClass('show-responsive-nav');
    $('#responsive-nav').removeClass('hide-responsive-nav');
  });

  $('.close-nav').on('click', function() {
    $('#responsive-nav').removeClass('show-responsive-nav');
    $('#responsive-nav').addClass('hide-responsive-nav');
  });

  $('.res-nav').click(function(e) {
    e.preventDefault();
    $('#responsive-nav').removeClass('show-responsive-nav');
    $('#responsive-nav').addClass('hide-responsive-nav');
  });

  var html = '';
  var images = [
    { url: 'assets/images/edits-0007.jpg' },
    { url: 'assets/images/edits-0008.jpg' },
    { url: 'assets/images/edits-0009.jpg' },
    { url: 'assets/images/edits-0012.jpg' },
  ];

  function populateGallery(image) {
    var ret = '';

    ret += '<div class="slide-item item" style="background:url(' + image.url + ')no-repeat center center;background-size:cover;">';
    ret += '</div>';
    return ret;
  }

  for (var i = 0; i < images.length; i++) {
    html += populateGallery(images[i]);
  }

  $('#owl-gallery').html(html);

  $("#owl-gallery").owlCarousel({

      // navigation : true, // Show next and prev buttons
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: 4000,

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  $.get('./test.csv', function (data) {
    var articles = $.csv.toObjects(data);
    console.log(articles[0].title);
  });
});
