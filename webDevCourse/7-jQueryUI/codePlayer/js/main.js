var panels = 4;
//html button/panel interaction
$('#html-button').click(function(){
    if ($('#html').is(':visible')){
        $('#html').hide();
        $('#html-button').css({'color': 'gray', 'text-decoration':'line-through'});
        panels--;
    } else if (!($('#html').is(':visible'))){
        $('#html').show();
        $('#html-button').css({'color': 'black', 'text-decoration':'none'});
        panels++;
        $('#hidden-p').hide();
    }
    $('.display').width(Math.floor(1000/panels));
    if (panels < 1){
        $('#hidden-p').show();
    }
});

//css button/panel interaction
$('#css-button').click(function(){
    if ($('#css').is(':visible')){
        $('#css').hide();
        $('#css-button').css({'color': 'gray', 'text-decoration':'line-through'});
        panels--;
    } else if (!($('#css').is(':visible'))){
        $('#css').show();
        $('#css-button').css({'color': 'black', 'text-decoration':'none'});
        panels++;
        $('#hidden-p').hide();
    }
    $('.display').width(Math.floor(1000/panels));
    if (panels < 1){
        $('#hidden-p').show();
    }
});

//js button/panel interaction
$('#js-button').click(function(){
    if ($('#js').is(':visible')){
        $('#js').hide();
        $('#js-button').css({'color': 'gray', 'text-decoration':'line-through'});
        panels--;
    } else if (!($('#js').is(':visible'))){
        $('#js').show();
        $('#js-button').css({'color': 'black', 'text-decoration':'none'});
        panels++;
        $('#hidden-p').hide();
    }
    $('.display').width(Math.floor(1000/panels));
    if (panels < 1){
        $('#hidden-p').show();
    }
});

//output button/panel interaction
$('#output-button').click(function(){
    if ($('#output').is(':visible')){
        $('#output').hide();
        $('#output-button').css({'color': 'gray', 'text-decoration':'line-through'});
        panels--;
    } else if (!($('#output').is(':visible'))){
        $('#output').show();
        $('#output-button').css({'color': 'black', 'text-decoration':'none'});
        panels++;
        $('#hidden-p').hide();
    }
    $('.display').width(Math.floor(1000/panels));
    if (panels < 1){
        $('#hidden-p').show();
    }
});