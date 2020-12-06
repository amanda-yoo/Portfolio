$(function(){

    $(window).load(function(){
        alert('준비중인 페이지입니다. (완성도 70%)')
    });

    // main logo animation
    setInterval(function(){
        var delayTime = 3000;

        // logo1 보이고 logo2 안보임
        $(".logo2").delay(delayTime).animate({"opacity":"1"}, 1000);
        $(".logo1").delay(delayTime).animate({"opacity":"0"}, 1000);
    
        // logo1 서서히 사라지고 logo2 서서히 나타남
        $(".logo1").delay(delayTime).animate({"opacity":"1"}, 1000);
        $(".logo2").delay(delayTime).animate({"opacity":"0"}, 1000);
    });



    //nav slide
    $('.mainNav > li').hover(function(){
        $('.subNav').stop().slideDown(500);
        // $('#header').addClass('on');
        $('.navBar').addClass('on');
    }, function(){
        $('.subNav').stop().slideUp(200);
        // $('#header').removeClass('on');
        $('.navBar').removeClass('on');
    });


    // best section
    $('.best_cont_img').click(function(){
        $('#sec_best').addClass('on');
        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
        // $('#sec_best .container::before').css('opacity', '1');
    });
    $('.best_close').click(function(){
        $('#sec_best').removeClass('on');
        $('.best_cont_img').parent().removeClass('on');
    });

    //숫자 count
    $('.counter').counterUp({
        delay: 5,
        time: 1300
    });


    // footer family 버튼
    $('.ft-fam').on('click', function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on'); 
            $('.ft-fam-list').slideUp(); 
        }else{
            $(this).addClass('on'); 
            $('.ft-fam-list').slideDown();
        }
        return false;
    });
    

});