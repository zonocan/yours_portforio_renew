//投稿画像の切り替えボタンの実装

$(document).on('ready', function() {
  $("#slider_img_lists").slick({
    //dots: true,
    autoplay: true,
    cssEase: "linear",
    swipe: false, // 操作による切り替えはさせない
    arrows: false,
    fade: true,
  });
});
