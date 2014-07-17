$( document ).ready(function() {

  function fill(elem, color) {
    $(elem).addClass('fill').addClass(color);
    $(elem).removeClass('empty');
  }

  function empty(elem) {
    $(elem).addClass('empty');
    $(elem).removeClass('fill');  
  }

  $('li').hoverIntent(function() {
    var color = $(this).data('color');
    fill(this, 'fill-' + color);
  }, function() {
    empty(this);
  });  


  $('.fa').hoverIntent(function() {
    $(this).addClass('glow');
  }, function() {
    $(this).removeClass('glow');
  })

})