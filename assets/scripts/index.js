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
    $('body').removeClass('no-scroll');
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

  $('form.form-email').submit(function(e) {

      // return false so form submits through jQuery rather than reloading page.
      // if (e.preventDefault) e.preventDefault();
      // else e.returnValue = false;
      e.preventDefault();

      var thisForm = $(this).closest('form.form-email'),
          error = 0,
          originalError = thisForm.attr('original-error'),
          loadingSpinner, iFrame, userEmail, userFullName, userFirstName, userLastName;
      // Mailchimp/Campaign Monitor Mail List Form Scripts
      iFrame = $(thisForm).find('iframe.mail-list-form');

      if ((iFrame.length) && (typeof iFrame.attr('srcdoc') !== "undefined") && (iFrame.attr('srcdoc') !== "")) {

          userEmail = $(thisForm).find('.signup-email-field').val();
          userFullName = $(thisForm).find('.signup-name-field').val();
          userFirstName = $(thisForm).find('.signup-first-name-field').val();
          userLastName = $(thisForm).find('.signup-last-name-field').val();

          // validateFields returns 1 on error;
          if (validateFields(thisForm) !== 1) {
              console.log('Mail list signup form validation passed.');
              console.log(userEmail);
              console.log(userLastName);
              console.log(userFirstName);
              console.log(userFullName);

              iFrame.contents().find('#mce-EMAIL, #fieldEmail').val(userEmail);
              iFrame.contents().find('#mce-LNAME, #fieldLastName').val(userLastName);
              iFrame.contents().find('#mce-FNAME, #fieldFirstName').val(userFirstName);
              iFrame.contents().find('#mce-FNAME, #fieldName').val(userFullName);
              iFrame.contents().find('form').attr('target', '_blank').submit();
          }
      } else {

          if (typeof originalError !== typeof undefined && originalError !== false) {
              thisForm.find('.form-error').text(originalError);
          }


          error = validateFields(thisForm);


          if (error === 1) {
              $(this).closest('form').find('.form-error').fadeIn(200);
              setTimeout(function() {
                  $(thisForm).find('.form-error').fadeOut(500);
              }, 3000);
          } else {
              // Hide the error if one was shown
              $(this).closest('form').find('.form-error').fadeOut(200);
              // Create a new loading spinner while hiding the submit button.
              loadingSpinner = jQuery('<div />').addClass('form-loading').insertAfter($(thisForm).find('input[type="submit"]'));
              $(thisForm).find('input[type="submit"]').hide();

              jQuery.ajax({
                  type: "POST",
                  url: "mail/mail.php",
                  data: thisForm.serialize(),
                  success: function(response) {
                      // Swiftmailer always sends back a number representing numner of emails sent.
                      // If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
                      $(thisForm).find('.form-loading').remove();
                      $(thisForm).find('input[type="submit"]').show();
                      if ($.isNumeric(response)) {
                          if (parseInt(response) > 0) {
                              thisForm.find('.form-success').fadeIn(1000);
                              thisForm.find('.form-error').fadeOut(1000);
                              setTimeout(function() {
                                  thisForm.find('.form-success').fadeOut(500);
                              }, 5000);
                          }
                      }
                      // If error text was returned, put the text in the .form-error div and show it.
                      else {
                          // Keep the current error text in a data attribute on the form
                          thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
                          // Show the error with the returned error text.
                          thisForm.find('.form-error').text(response).fadeIn(1000);
                          thisForm.find('.form-success').fadeOut(1000);
                      }
                      $('form.form-email input[type="text"]').val('');
                  },
                  error: function(errorObject, errorText, errorHTTP) {
                      // Keep the current error text in a data attribute on the form
                      thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
                      // Show the error with the returned error text.
                      thisForm.find('.form-error').text(errorHTTP).fadeIn(1000);
                      thisForm.find('.form-success').fadeOut(1000);
                      $(thisForm).find('.form-loading').remove();
                      $(thisForm).find('input[type="submit"]').show();
                  }
              });
          }
      }

      return false;
  });

  $('.validate-required, .validate-email').on('blur change', function() {
      validateFields($(this).closest('form'));
  });

  $('form').each(function() {
      if ($(this).find('.form-error').length) {
          $(this).attr('original-error', $(this).find('.form-error').text());
      }
  });

  function validateFields(form) {
      var name, error, originalErrorMessage;

      // $(form).find('.validate-required[type="checkbox"]').each(function() {
      //     if (!$('[name="' + $(this).attr('name') + '"]:checked').length) {
      //         error = 1;
      //         name = $(this).attr('name').replace('[]', '');
      //         form.find('.form-error').text('Please tick at least one ' + name + ' box.');
      //     }
      // });

      // $(form).find('.validate-rsvp').each(function() {
      //     if ($(this).val().toUpperCase() !== 'ATTENDING' || 'NOT ATTENDING') {
      //         $(this).addClass('field-error');
      //         form.find('.form-error').text('Please enter either "attending" or "not attending"');
      //         error = 1;
      //     } else {
      //         form.find('.form-error').text('Please complete all required fields');
      //         $(this).removeClass('field-error');
      //     }
      // });

      $(form).find('.validate-email').each(function() {
          if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
              $(this).addClass('field-error');
              form.find('.form-error').text('Please enter a valid email address');
              error = 1;
          } else {
              form.find('.form-error').text('Please complete all required fields');
              $(this).removeClass('field-error');
          }
      });

      $(form).find('.validate-required').each(function() {
          if ($(this).val() === '') {
              $(this).addClass('field-error');
              form.find('.form-error').text('Please complete all required fields');
              error = 1;
          } else {
              $(this).removeClass('field-error');
          }
      });

      if (!form.find('.field-error').length) {
          form.find('.form-error').fadeOut(1000);
      }

      return error;
  }

  // $('#rsvp-form').on('submit', function(e) {
  //   e.preventDefault();
  //   var names = $("input[name=rsvp-names]").val();
  //   var rsvp = $("input[name=rsvp]").val();
  //   var songs = $("input[name=rsvp-songs]").val();
  //   console.log(names);
  //   console.log(rsvp);
  //   console.log(songs);
  //   $('div.radio-holder').removeClass('checked');
  //   $("input[name=rsvp-names]").val('');
  //   $("input[name=rsvp-songs]").val('');
  //   var math = Math.random();
  //   if(math > .5) {
  //     console.log(math);
  //     $('#success').removeClass('hide');
  //     setTimeout(function() {
  //         $("#success").addClass('hide');
  //     }, 3000);
  //   } else {
  //     console.log(math);
  //     $('#fail').removeClass('hide');
  //     setTimeout(function() {
  //         $("#fail").addClass('hide');
  //     }, 3000);
  //   }
  // });
});
