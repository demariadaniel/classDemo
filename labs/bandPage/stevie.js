$(document).ready(function(){


    $('h1, h2').hover(function(){
        $(this).addClass('underline')
    }, function(){
        $(this).removeClass('underline')
    })

})