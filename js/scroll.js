$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 100 ){
            $(".ltr").css("color", "#f2545f");
        }
    });
});