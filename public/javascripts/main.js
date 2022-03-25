let click_plus;

$(function(){
    $('.spinner .spinner_minus').on('click',function(){
        $(this).siblings('.spinner_input').val(Number($(this).siblings('.spinner_input').val())-1);
    })
    $('.spinner .spinner_plus').on('mousedown',function(){
        click_plus = setInterval(() => {
            $(this).siblings('.spinner_input').val(Number($(this).siblings('.spinner_input').val())+1);
        }, 50);
    })
    $('.spinner .spinner_plus').on('mouseup',function(){
        clearInterval(click_plus);
    })

})