$(document).ready(function(){

    $('.next').click(function(){
        const now_img = $('.show');
        const next_img = now_img.next();
        if(next_img.length){
            now_img.fadeOut('slow').removeClass('show');
            next_img.fadeIn('slow').addClass('show');
        }  
    });


    $('.prev').click(function(){
        const now_img = $('.show');
        const prev_img = now_img.prev();
        if(prev_img.length){
            now_img.fadeOut('slow').removeClass('show');
            prev_img.fadeIn('slow').addClass('show');
        }  
    });

});
$(document).ready(function(){
    $('.tab_container').hide();
    $('.tab_container:first-child').show();

    $('.days li').click(function(){
        $('.days li').removeClass('active');
        $(this).addClass('active');

        const now_tab = $(this).attr('data-attr');
        $('.tab_container').hide();
        $('.' + now_tab).show();


    });
});