// Sticky navigation
$(".main-nav").sticky({
  topSpacing:0
});

$('.portfolio-hero-btn').hide();
  $('.contact-hero-btn').hide();

$('.hero-header').hide().slideDown(2000);
$('.hero-paragraph').hide().fadeIn(3000);
// $('.portfolio-hero-btn').hide().delay(1000).fadeIn(3000);
// $('.contact-hero-btn').hide().delay(1000).fadeIn(3000);

setTimeout(function() {
  $('.portfolio-hero-btn').fadeIn(4000);
  $('.contact-hero-btn').fadeIn(4000);
}, 2000);