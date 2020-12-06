$(function(){

    var $sec = $('#profile > section'); //각 섹션들
    var $secInfo = []; //배열로 만들것임

    $sec.each(function(){ //섹션 각각에 함수를 적용할 것
        var $this = $(this); //내가 선택한 그 섹션을 $this로 정의
        $secInfo.push($this.offset().top); //빈 배열에 각 섹션들의 위에서 얼마나 떨어져 있는지에 대한 값을 넣어줌
        // console.log($secInfo);
    });

    $(window).scroll(function(){ //윈도우에서 스크롤 움직이면 이벤트 할 것
        var sct = $(this).scrollTop(); //현재 스크롤바의 위치를 sct로 정의

        $sec.each(function(idx){ //섹션 각각에 함수를 적용할 것
            var $this = $(this); //내가 선택한 그 섹션을 $this로 정의            
            var $newtop = $secInfo[idx] - sct;

            if(sct > $secInfo[idx]){
                $newtop *=0.3;
            }

            $this.css({top:$newtop});
        });

    });
});