'use strict';
$(document).ready(function() {

  // Loading Section
  setTimeout(function(){
          $('#section-right').addClass('slide-right');
          $('#section-left').addClass('slide-left');
          $('#loading-icon').addClass('fade-out');
  }, 2000);

  setTimeout(function(){
    $('#loading-icon').addClass('hide');
  }, 4000);

  //
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
    { url: 'assets/images/edits-0007.png' },
    { url: 'assets/images/edits-0024.png' },
    { url: 'assets/images/edits-0027.png' },
    { url: 'assets/images/edits-0068.png' },
    { url: 'assets/images/edits-0069.png' },
    { url: 'assets/images/edits-0077.png' },
    { url: 'assets/images/edits-0080.png' },
    { url: 'assets/images/edits-0090.png' },
    { url: 'assets/images/edits-0095.png' },
    { url: 'assets/images/edits-0098.png' },
    { url: 'assets/images/edits-0105.png' },
    { url: 'assets/images/edits-0109.png' },
    { url: 'assets/images/edits-0110.png' },
    { url: 'assets/images/edits-0115.png' },
    { url: 'assets/images/edits-0118.png' },
    { url: 'assets/images/edits-0120.png' },
  ];

  function populateGallery(image) {
    var ret = '';

    ret += '<div class="slide-item item">';
    ret += '<img src="'+image.url+'" class="slide" rel="Gallery Image">';
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

  });

  // $.get('./test.csv', function (data) {
  //   var articles = $.csv.toObjects(data);
  //   console.log(articles[0].title);
  // });

  $('.radio-holder').on('click', function() {
    $('div.radio-holder').removeClass('checked');
    $(this).toggleClass('checked');
  });

  $('#rsvp-form').on('submit', function(e) {
    e.preventDefault();
    var names = $("input[name=rsvp-names]").val();
    var rsvp = $("input[name=rsvp]").val();
    var songs = $("input[name=rsvp-songs]").val();
    console.log(names);
    console.log(rsvp);
    console.log(songs);
    $('div.radio-holder').removeClass('checked');
    $("input[name=rsvp-names]").val('');
    $("input[name=rsvp-songs]").val('');
    var math = Math.random();
    if(math > .5) {
      console.log(math);
      $('#success').removeClass('hide');
      setTimeout(function() {
          $("#success").addClass('hide');
      }, 3000);
    } else {
      console.log(math);
      $('#fail').removeClass('hide');
      setTimeout(function() {
          $("#fail").addClass('hide');
      }, 3000);
    }
  });
});
