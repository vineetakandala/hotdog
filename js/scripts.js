$(document).ready(function() {

/*For the sticky navigation*/
    $('.js--section-intro').waypoint(function(direction) {
      if(direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      } 
    }, {
        offset: '60px;'
    });

    
   
    
    
 /*Mobile Navigation*/
    $('.js--nav-icon').click(function() {
//        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        $('.main-nav').toggleClass('main-nav-active');
        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {    
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
    
    
});