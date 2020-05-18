$(function(){
   $('#album nav a').on('click', function(){
        var cat_name = $(this).attr('href');
        console.log(cat_name)

        if(cat_name !== '#album_list'){
            // 일반 카테고리
            $('#album_list ul').hide(200);
            $(cat_name).show();
        } else {
            // all 버튼을 누른 경우
            $('#album_list ul').show(200);
        }
        return false;
   });
});