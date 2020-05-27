//index eraser
$(function(){
    if($(window).width() > 768){
        $('#redux').eraser({ });
    }
});

//滾動時，header fixed，關於郝創意線條長度
$(function(){
    var windowHeight = $(window).height();
    $(window).bind('mousewheel',function(){
        //header fixed
        if($('html,body').scrollTop() > $('#indexBg').height()){
            $('#header').css({
                position: 'fixed',
                top: 0,
            });
        } else{
            $('#header').css({
                position: '',
                top: '',
            })
        }
         //shrink header
        if(($(this).scrollTop() > $('#indexBg').height()) && $(this).width() > 1300){
            $('#header').css({
                height: '3rem',
                padding: '.5rem 9rem',
            })
        }else if(($(this).scrollTop() > $('#indexBg').height()) && $(this).width() > 768 && $(this).width() <= 1300){
            $('#header').css({
                height: '3rem',
                padding: '.5rem 1rem',
            })
        }else{
            $('#header').css({
                height: '',
                padding: ''
            })
        }
        //window's width > 768
        if($(this).scrollTop() > $('#indexBg').height() && $(this).width() > 768){
            //about's scroll line
            var scrollHeight = $(this).scrollTop();
            var reduceHeight = $('.aboutLine').offset().top;
            var lineMaxHeight = $('#about').height();
            $('#lineShow').css({
                height: `${scrollHeight - reduceHeight + windowHeight/2 }px`
            }) 
            var lineShow = $('#lineShow').height();
            if(lineShow >= lineMaxHeight){
                $('#lineShow').css({
                    height: `${lineMaxHeight}px`
                }) 
            }

            $('.dot').each(function () {
                var dotHeight = $(this).offset().top - reduceHeight;
                if (lineShow > dotHeight) {
                    $(this).addClass('dotActive');
                } else {
                    $(this).removeClass('dotActive');
                }
            })
        } 
    })
})

//menu button
$(function(){
    $('#bar').on('click', function(){
        $('#menu').slideToggle();
    })
})
//menu link
function linkto(linkId){
    var headerHeight = $('#header').height();
    $('html, body').animate({scrollTop: $(`#${linkId}`).offset().top-headerHeight-50}, 800);
}
