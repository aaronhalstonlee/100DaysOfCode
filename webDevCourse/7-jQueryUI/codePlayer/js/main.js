//toggling panels
var panels = 2;
$('.panel').width(($(window).width()/panels)-2)

$('#html').click(function(){
  if ($('#html-panel').is(':visible')){
    $('#html-panel').hide();
    panels--;
  } else if(!($('#html-panel').is(':visible'))){
    $('#html-panel').show();
    panels++
  }
  $('.panel').width( Math.floor($(window).width()/panels)-2);
});

$('#css').click(function(){
  if ($('#css-panel').is(':visible')){
    $('#css-panel').hide();
    panels--;
  } else if(!($('#css-panel').is(':visible'))){
    $('#css-panel').show();
    panels++
  }
  $('.panel').width( Math.floor($(window).width()/panels)-2);
});

$('#js').click(function(){
  if ($('#js-panel').is(':visible')){
    $('#js-panel').hide();
    panels--;
  } else if(!($('#js-panel').is(':visible'))){
    $('#js-panel').show();
    panels++
  }
  $('.panel').width( Math.floor($(window).width()/panels)-2);
});

$('#output').click(function(){
  if ($('iframe').is(':visible')){
    $('iframe').hide();
    panels--;
  } else if(!($('#iframe').is(':visible'))){
    $('iframe').show();
    panels++
  }
  $('.panel').width( Math.floor($(window).width()/panels)-2);
});
//end of toggling panels
// button functions
$('.buttons').hover(function(){
  $(this).addClass('highlight');  
}, function(){
  $(this).removeClass('highlight');
});

$('.buttons').click(function(){
  $(this).toggleClass('select');
  $(this).removeClass('highlight');
});

//active panel width

//updating output pannel
function updatePanel(){
  $('iframe').contents().find('html').html('<html><head><style type="text/css">'+$('#css-panel').val()+'</style></head><body>'+$('#html-panel').val()+'</body></html>');
  document.getElementById('output-panel').contentWindow.eval($('#js-panel').val());  
}


$('textarea').on('change keyup paste', function(){
  updatePanel();
});