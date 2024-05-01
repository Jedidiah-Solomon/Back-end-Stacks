




$(function() {
    $('#btn1').on('click', function(){
        $("p").append(" <b>Appended text</b>.");
    });

    $('#btn2').on('click', function() {
        $('ol').append('<li> Jedy appended items</li>');
    });
});


