$(document).ready(function(){
    // banner slider
    $('.as_banner_slider').slick({
        dots: true,
        speed:800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>'
    });





    // overview slider
    $('.as_about_slider').slick({
        infinite:true,
        speed:800,
        dots:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000
    });
    // overview slider
    $('.as_overview_slider').slick({
        infinite:true,
        speed:800,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>' ,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows:false
              }
            },
          ]
    });

    
    // datepicker
    $('.as_datepicker').datepicker({
        language: 'en'
    });

    // timepicker
    $('.as_timepicker').datepicker({
        dateFormat: ' ',
        timepicker: true,
        classes: 'only-timepicker',
        language: 'en' 
    });

    // countTo
    $('.as_number>span>span').countTo();
    


    // menu toggle
    $('.as_toggle').on('click',function(){
        $(this).parent().toggleClass('menu_open');
        $(this).parent().find('.as_menu ul  li .as_submenu').parent().addClass('as_submenu_li')
    })
    $('.as_body_overlay').on('click',function(){
        $('.as_menu_wrapper').removeClass('menu_open');
    })
    // responsive menu
    $(document).on('click','.as_menu > ul > li >a',function(){
      // console.log($(this).closest('li').find('ul.submenu'))
      $('.as_menu >ul > li>.as_submenu').removeClass('active');
      $(this).closest('li').find('>ul.as_submenu').addClass('active')
    })
    $(document).on('click','.as_menu > ul > li > ul > li >a',function(){
      // console.log($(this).closest('li').find('ul.submenu'))
      $(this).closest('li').find('>ul.as_submenu').toggleClass('active')
    })
    // countTo
    if ($('.as_number>span>span').length) {
        $('.as_number>span>span').countTo();
    }


    if($('.as_select_box').length){
      $(".as_select_box select").select2({
          placeholder: 'data-placeholder',
          allowClear: true
      });
  }
    // circle
    if($('.as_progressbar').length){
      $(".as_progressbar.p1").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 45, 5000);
      $(".as_progressbar.p2").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 94, 5000);
      $(".as_progressbar.p3").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 84, 5000);
      $(".as_progressbar.p4").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 64, 5000);
      $(".as_progressbar.p5").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 76, 5000);
   }

 

  

  
  
})
$(window).on('load',function(){
    $('.as_loader').addClass('hide')
})