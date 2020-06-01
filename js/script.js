// Sticky navigation
$(".main-nav").sticky({
  topSpacing: 0
});

$('.hero-header').hide();
$('.hero-header').slideDown(1000);
$('.hero-paragraph').hide();
$('.portfolio-hero-btn').hide();
$('.contact-hero-btn').hide();

setTimeout(function() {
  $('.hero-paragraph').slideDown();
  $('.portfolio-hero-btn').slideDown();
  $('.contact-hero-btn').slideDown();
}, 2000);