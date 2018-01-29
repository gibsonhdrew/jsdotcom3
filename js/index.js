setTimeout(function() {
  $('.cb2').click(function(event) {
    event.stopPropagation();
    $('#performanceSlider').toggle()
  })

  $('.slideNavs').click(function() {
    $('#performanceSlider').toggle()
  })

  $(document).click( function(){
    $('#performanceSlider').hide();
  });
}, 100)
