$(function(){
   $('#album nav a').on('click', function(){
        var cat_name = $(this).attr('href');
        console.log(cat_name)

        if(cat_name !== '#album_list'){
            // 일반 카테고리
            $('#album_list ul').fadeOut(200);
            $(cat_name).fadeIn();
        } else {
            // all 버튼을 누른 경우
            $('#album_list ul').fadeIn(200);
        }
        return false;
   });
   $('#album > nav > a').click(function(){
    // 클래스 제거(상태 초기화)
    $('#album > nav > a').removeClass('selected');

    // 클래스 추가
    $(this).addClass('selected');

    // a태그 하이퍼링크 기본 이벤트 해제
    return false;
    });
});