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
    
    // setInterval 함수 선언
    var $li1 = $('nav ul li:nth-child(1)');
    var $li2 = $('nav ul li:nth-child(2)');
    var $li3 = $('nav ul li:nth-child(3)');
    var $li4 = $('nav ul li:nth-child(4)');
    var $li5 = $('nav ul li:nth-child(5)');

    // li1
    var floatNav1 = function(){
        intervalNav = setInterval(function(){
            playNav1()});
    };
    var stopNav1 = function(){
        clearInterval(intervalNav);
    };
    var playNav1 = function(){
        var $li_first = $($li1).find('span').first();
        $($li1).find('.li_float').animate({
            'margin-left' : '-113px'
        }, 1000, function(){
            $($li1).find('.li_float').append($li_first).css('margin-left', '0px');
        });
    };
    $($li1).hover(function(){
        floatNav1();        
    }, function(){
        stopNav1();
    });

    // li2
    var floatNav2 = function(){
        intervalNav = setInterval(function(){
            playNav2()}, 100);
    };
    var stopNav2 = function(){
        clearInterval(intervalNav);
    };
    var playNav2 = function(){
        var $li_first = $($li2).find('span').first();
        $($li2).find('.li_float').animate({
            'margin-left' : '-144px'
        }, 1000, function(){
            $($li2).find('.li_float').append($li_first).css('margin-left', '0px');
        });
    };
    $($li2).hover(function(){
        floatNav2();        
    }, function(){
        stopNav2();
    });

    // li3
    var floatNav3 = function(){
        intervalNav = setInterval(function(){
            playNav3()}, 100);
    };
    var stopNav3 = function(){
        clearInterval(intervalNav);
    };
    var playNav3 = function(){
        var $li_first = $($li3).find('span').first();
        $($li3).find('.li_float').animate({
            'margin-left' : '-196px'
        }, 1000, function(){
            $($li3).find('.li_float').append($li_first).css('margin-left', '0px');
        });
    };
    $($li3).hover(function(){
        floatNav3();        
    }, function(){
        stopNav3();
    });

    // li4
    var floatNav4 = function(){
        intervalNav = setInterval(function(){
            playNav4()}, 100);
    };
    var stopNav4 = function(){
        clearInterval(intervalNav);
    };
    var playNav4 = function(){
        var $li_first = $($li4).find('span').first();
        $($li4).find('.li_float').animate({
            'margin-left' : '-129px'
        }, 1000, function(){
            $($li4).find('.li_float').append($li_first).css('margin-left', '0px');
        });
    };
    $($li4).hover(function(){
        floatNav4();        
    }, function(){
        stopNav4();
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