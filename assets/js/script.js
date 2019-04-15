$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000'); 
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
   /*================================================
                GALLERY
   ============================================*/
     $(".filter-gallery").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000'); 
        }
    });
    
    if ($(".filter-gallery").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

$('#owl-industry').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    smartSpeed: 200,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('#owl-team').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    smartSpeed: 200,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        992:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.nav-pack').addClass("sticky");
  }
  else {
    $('.nav-pack').removeClass("sticky");
  }
});


 $("#more").click(function() {
  $("#history-result").hide(), 
  $("#more-result").toggle('show')
 });
 $("#history").click(function() {
  $("#more-result").hide(), 
  $("#history-result").toggle('show')
 });



});
/*==========================================================================
        WHEN DOCUMENT LOADING 
 ==========================================================================*/
        $(window).on('load', function() {
            preloader();
 
        });
/*------------------------------------------
    = HIDE PRELOADER
-------------------------------------------*/
function preloader() {
    if($('.preloader').length) {
        $('.preloader').delay(500).fadeOut(800, function() {

        });
    }
}