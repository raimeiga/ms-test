$(function() {

 // ハンバーガー
 $('.c-hamburger').click(function(){
   $(this).toggleClass('active')
   $('.p-header-nav').toggleClass('active')
 })

 $('.header__nav ul li a').click(function(){
   $('.c-hamburger').removeClass('active')
   $('.p-header-nav').removeClass('active')
 })

 // FVのスライダー
 $('.js-slider').slick({ 
   autoplay: false, 
   arrows: true,
   slidesToShow: 3, // 3枚ずつ表示
   slidesToScroll: 1, // 1枚ずつスクロール
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
   nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
   responsive: [
     {
       breakpoint: 768,
       settings: {      
         slidesToShow: 1, // 1枚表示
         slidesToScroll: 1     
       }
     }
   ]
 });

 // アコーディオンメニュー
 $('.p-qa-list__q').on('click', function(){
   $(this).toggleClass('active');
   $(this).next().slideToggle();
 });

 // トップに戻るボタンの表示・非表示の切り替え
 $(window).on('scroll', function() {
   if ($(this).scrollTop() > 200) {
     $('.c-top-back-btn, .c-btn').addClass('active');
   } else {
     $('.c-top-back-btn, .c-btn').removeClass('active');
   }
 });

 // SimpleBarの初期化
 const tableWrap = document.querySelector('.p-plan__table-wrap');
 if (tableWrap) {
   new SimpleBar(tableWrap, {
     autoHide: false,  // スクロールバーを常に表示
     scrollbarMaxSize: 120, // スクロールバーの最大サイズ    
    });
 }

 
 
 $(window).on('scroll', function() {
  var footerOffset = $('footer').offset().top;  // フッターの位置
  var scrollPosition = $(window).scrollTop() + $(window).height();  // 現在のスクロール位置 + ウィンドウの高さ
  var isPC = $(window).width() > 767;  // PC画面かSP画面かを判定

  // 要素の取得
  var topBackBtn91_79 = $('.c-top-back-btn--91-79');  // トップに戻るボタン（91/79）
  var topBackBtn30_18 = $('.c-top-back-btn--30-18');  // トップに戻るボタン（30/18）
  var contactBtn = $('.c-btn--fixed');  // お問い合わせボタン

  // フッターに到達しているかチェック
  if (scrollPosition >= footerOffset) {
      var footerHeight = $('footer').outerHeight();  // フッターの高さ

      if (isPC) {
          // PC画面の場合
          topBackBtn91_79.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (91 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
              right: '10rem'
          });

          topBackBtn30_18.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (30 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
              right: '10rem'
          });

          // お問い合わせボタンは常にフッターの上に配置
          contactBtn.css({
             position: 'absolute',
             bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
             left: 'auto', // 左側の位置を自動設定
             right: '0',   // 右側を0に設定
             opacity: 1,
             visibility: 'visible'
          });

      } else {
          // SP画面の場合
          topBackBtn91_79.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (79 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
              right: '2rem'
          });

          topBackBtn30_18.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (18 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
              right: '2rem'
          });

          // お問い合わせボタンは常にフッターの上に配置
          contactBtn.css({
             position: 'absolute',
             bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
             left: '50%', // 左側を50%に設定
             transform: 'translateX(-50%)', // 中心を左に50%移動
             opacity: 1,
             visibility: 'visible'
          });
      }
   

  } else {
      if (isPC) {
          // PC画面の場合、通常時は画面右下に固定表示
          topBackBtn91_79.css({
              position: 'fixed',
              bottom: 'calc(91 / 1080 * 100vw)',  // 固定表示
              right: '10rem',
              opacity: 1,
              visibility: 'visible'
          });

          topBackBtn30_18.css({
              position: 'fixed',
              bottom: 'calc(30 / 1080 * 100vw)',  // 固定表示
              right: '10rem',
              opacity: 1,
              visibility: 'visible'
          });

                 // お問い合わせボタンは常に画面下端に固定
          contactBtn.css({
             position: 'fixed',
             bottom: '0',  // 固定表示
             left: 'auto', // 左側の位置を自動設定
             right: '0',   // 右側を0に設定
             opacity: 1,
             visibility: 'visible'
          });

      } else {
          // SP画面の場合、通常時は画面右下に固定表示
          topBackBtn91_79.css({
              position: 'fixed',
              bottom: 'calc(79 / 375 * 100vw)',  // 固定表示
              right: '2rem',
              opacity: 1,
              visibility: 'visible'
          });

          topBackBtn30_18.css({
              position: 'fixed',
              bottom: 'calc(18 / 375 * 100vw)',  // 固定表示
              right: '2rem',
              opacity: 1,
              visibility: 'visible'
          });

                 // お問い合わせボタンは常に画面下端に固定
          contactBtn.css({
             position: 'fixed',
             bottom: '0',  // 固定表示
             left: '50%', // 左側を50%に設定
             transform: 'translateX(-50%)', // 中心を左に50%移動
             opacity: 1,
             visibility: 'visible'
          });
      }      
  }
  
});
});
