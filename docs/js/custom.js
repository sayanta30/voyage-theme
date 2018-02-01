$(document).ready(function(){
    $(".special-img-outer").mouseenter(function(){
        $(this).css('background-color','#204652');
        $(this).find(".div-text").css('color','#fefefe');
        $(this).find(".dropdown-logo-css").css("filter","invert(1)");
    });
    $(".special-img-outer").mouseleave(function(){
        $(this).css('background-color','#eeeeee');
        $(this).find(".div-text").css('color','#000');
        $(this).find(".dropdown-logo-css").css("filter","invert(0)");
    });
    $("#hamburger-menu").click(function(){
    	$('#site-nav').toggle();
    	$("#site-nav").toggleClass("display-block");
    	if($("#site-nav").hasClass("display-block")){
    	  $("body").addClass("body-overflow-hidden");
    	}
    	else{
        $("body").removeClass("body-overflow-hidden");
    	}
    });
    $(".border-color-green-holiday-images").mouseenter(function(){
        $(this).addClass("border-color-green");
        $(this).find(".holiday-images").css("filter","grayscale(0)");
    });
    $(".border-color-green-holiday-images").mouseleave(function(){
        $(this).removeClass("border-color-green");
        $(this).find(".holiday-images").css("filter","grayscale(100%)");
    });
    $("#footer-bottom").after().click(function() {
      $('html, body').animate({
        scrollTop: $("header").offset().top
      }, 1000);
    });
});