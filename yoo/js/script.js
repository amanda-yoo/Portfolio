$(function(){

    // nav 보이기
    $('.hamburger').click(function(){
        if($('.header').hasClass('on')) {
            $('.header').removeClass('on');
        }else{
            $('.header').addClass('on');
        }            
    });

    $('body').click(function (e) {
        if (!$('.header').has(e.target).length) {
            $('.header').removeClass('on');
        }
    });
    
    // nav 메뉴색 변화
    $('nav ul li').hover(function(){
        $(this).addClass('on');
    }, function(){
        $(this).removeClass('on');
    });  

    // progress bar
    $(window).scroll(function () {
        var scrolled = window.pageYOffset;
        var winheight = $(document).height() - $(window).height();
        var sclpercent = (scrolled / winheight) * 100;
        $('#progress').css('width', sclpercent + '%');
    });


    // 새로고침시 scrollTop 0
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });
    

    // 풀페이지
   $('#fullpage').fullpage({
		anchors: ['main1','main2','main3','main4','main5','main6'],
        animateAnchor :true,
		autoScrolling:true,
		keyboardScrolling :  true,
		// responsiveWidth: 1025,
        scrollingSpeed: 500,
        navigation: true,
        navigationPosition: 'right',
        // onLeave: function(anchorLink, section){
        afterLoad: function(anchorLink, index){
			
            if(index == 1 || anchorLink=='main1'){
                $('#fl_top img').css('transform', 'rotate(0deg)');
            }            
			else if(index == 2 || anchorLink=='main2'){
                $('#fl_top img').css('transform', 'rotate(60deg)');
            }			
			else if(index == 3 || anchorLink=='main3'){
				$('#fl_top img').css('transform', 'rotate(120deg)');
            }
			else if(index == 4 || anchorLink=='main4'){
				$('#fl_top img').css('transform', 'rotate(180deg)');
            }			
            else if(index == 5 || anchorLink=='main5'){
				$('#fl_top img').css('transform', 'rotate(240deg)');
            }            
            else if(index == 6 || anchorLink=='main6'){
				$('#fl_top img').css('transform', 'rotate(300deg)');
            }
		},
	});

    // 풀페이지 top 버튼
    $('#fl_top').click(function(){
        $.fn.fullpage.moveTo(1);
    });
});