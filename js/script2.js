// Sticky navigation
$(".main-nav").sticky({
  topSpacing: 0
});

$('.portfolio-hero-btn').hide();
  $('.contact-hero-btn').hide();

$('.hero-header').hide().slideDown(2000);
$('.hero-paragraph').hide().fadeIn(3000);

setTimeout(function() {
  $('.portfolio-hero-btn').fadeIn();
  $('.contact-hero-btn').fadeIn();
}, 2000);