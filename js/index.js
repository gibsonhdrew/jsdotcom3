setTimeout(function() {
  $('.cb2').click(function(event) {
    event.stopPropagation();
    $('#visualartSlider').hide()
    $('#performanceSlider').toggle()
  })

  $('.cb3').click(function(event) {
    event.stopPropagation();
    $('#performanceSlider').hide()
    $('#visualartSlider').toggle()
  })

  $('.slideNavs').click(function() {
    $('#performanceSlider').hide()
    $('#visualartSlider').hide()
  })

  $(document).click( function(){
    $('#performanceSlider').hide();
    $('#visualartSlider').hide();
  });

}, 100)
