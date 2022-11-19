$(function() {

  //headerの申し込みボタン
  $('#header_apply_btn_id').hover(
    function() {
      $('#header_btn_arrow_id').fadeOut(function() {
        $(this).fadeToggle();
      });
    }
  );

  //humberger_menuの実装
  $('#humberger_menu_id').on('click', function() {
    $('#humberger_menu_id').toggleClass('close');
    $('#humberger_nav_id').toggleClass('active');
  });

  //topページのボタン
  $('#top_apply_btn').hover(
    function() {
      $('#top_page_btn_arrow_id').fadeOut(function() {
        $(this).fadeToggle();
      });
    }
  );

  //aboutページボタン
  //申し込みボタン
  $('#about_apply_btn_id').on('mouseover', function() {
    $('#about_main_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#about_apply_btn_id').on('mouseleave', function() {
    $('#about_main_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });

  //serviceページ
  //serviceページのボタンのアイコン
  //⓵ジャケットボタン
  $('#jucket_service_btn').on('mouseover', function() {
    $('#jucket_service_btn_icon').attr('src', 'public/hover_service_btn_icon/jucket.png');
  });
  $('#jucket_service_btn').on('mouseleave', function() {
    $('#jucket_service_btn_icon').attr('src', 'public/icons_img/icon_1.png')
  });
  //②シャツボタン
  $('#shirts_service_btn').on('mouseover', function() {
    $('#shirts_service_btn_icon').attr('src', 'public/hover_service_btn_icon/shirts.png');
  });
  $('#shirts_service_btn').on('mouseleave', function() {
    $('#shirts_service_btn_icon').attr('src', 'public/icons_img/icon_3.png')
  });
  //③ボトムスボタン
  $('#bottoms_service_btn').on('mouseover', function() {
    $('#bottoms_service_btn_icon').attr('src', 'public/hover_service_btn_icon/bottoms.png');
  });
  $('#bottoms_service_btn').on('mouseleave', function() {
    $('#bottoms_service_btn_icon').attr('src', 'public/icons_img/icon_2.png')
  });
  //4アクセサリーボタン
  $('#accesary_service_btn').on('mouseover', function() {
    $('#accesary_service_btn_icon').attr('src', 'public/hover_service_btn_icon/accesary.png');
  });
  $('#accesary_service_btn').on('mouseleave', function() {
    $('#accesary_service_btn_icon').attr('src', 'public/icons_img/icon_4.png')
  });

  //reviewページのボタン
  //➀申し込みボタン
  $('#review_apply_btn_id').on('mouseover', function() {
    $('#review_apply_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#review_apply_btn_id').on('mouseleave', function() {
    $('#review_apply_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });
  //②もっと見るボタン
  $('#review_view_more_btn_id').on('mouseover', function() {
    $('#review_more_btn_arrow_id').attr('src', 'public/arrow_hover/arrow_hover.png');
  });
  $('#review_view_more_btn_id').on('mouseleave', function() {
    $('#review_more_btn_arrow_id').attr('src', 'public/btn_arrow/main_btn_arrow.png');
  });

  //詳細ボタン1
  $('#review_detail_btn_1').hover(
    function() {
      $('#review_detail_btn_1_arrow').fadeOut(function() {
        $(this).fadeToggle();
      });
    }
  );
  //詳細ボタン2
  $('#review_detail_btn_2').hover(
    function() {
      $('#review_detail_btn_2_arrow').fadeOut(function() {
        $(this).fadeToggle();
      });
    }
  );

});
