$(document).ready(function(){
    var button = $('#btn-top');

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            button.show();

        } else {
            button.hide();
        }
    });

    button.click(function(e){
        e.preventDefault();
    
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    
});