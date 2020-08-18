// Add a todo item using text input
$('input[type="text"]').keypress('click', function() {
  if(event.which === 13) {
    let userText = $('input').val();
    $('input').val("");
    $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${userText} </li>`);
  }
});

// Check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
})

// Click on X to delete todo
$('ul').on('click', 'span', function() {
  $('li').fadeOut(500, function() {
    $('li').remove();
  });
});

// Toggle add item input with plus sign
$('#add-item').on('click', function() {
  $('input').fadeToggle().focus();
  $('input').val("");
});




