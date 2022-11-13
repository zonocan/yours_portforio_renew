$(function(){

  //headerの申し込みボタン
  $('#header_apply_btn_id').hover(
    function() {
      $('#header_btn_arrow_id').fadeOut(function(){
        $(this).fadeToggle();
      });
    }
  );

  //humberger_menuの実装
  $('#humberger_menu_id').on('click',function(){
    $('#humberger_menu_id').toggleClass('active');
    $('#humberger_nav_id').toggleClass('active');
  });

  //topページのボタン
  $('#top_apply_btn').hover(
    function() {
      $('.humberger_nav').fadeOut(function(){
        $(this).fadeToggle();
      });
    }
  );

  //aboutページボタン
  $('#about_apply_btn_id').on('mouseover',function(){
    $('#about_main_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#about_apply_btn_id').on('mouseleave',function(){
    $('#about_main_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });

  //reviewページのボタン

  //申し込みボタン
  $('#review_apply_btn_id').on('mouseover',function(){
    $('#review_apply_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#review_apply_btn_id').on('mouseleave',function(){
    $('#review_apply_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });

  //もっと見るボタン
  $('#review_view_more_btn_id').on('mouseover',function(){
    $('#review_more_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#review_view_more_btn_id').on('mouseleave',function(){
    $('#review_more_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });

});