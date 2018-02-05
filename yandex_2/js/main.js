$('.td_busy').click(function(){ 
  $(".info").fadeToggle(100); 
 });


$('.a_calendar').click(function(){ 
  $("#calendar2").fadeToggle(100); 
  
});


$(function(){
  $('.td_free_1').hover(function(){ 
    $('.room_1').addClass('room_hover'); 
  }, function(){
    $('.room_1').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_2').hover(function(){ 
    $('.room_2').addClass('room_hover'); 
  }, function(){
    $('.room_2').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_3').hover(function(){ 
    $('.room_3').addClass('room_hover'); 
  }, function(){
    $('.room_3').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_4').hover(function(){ 
    $('.room_4').addClass('room_hover'); 
  }, function(){
    $('.room_4').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_5').hover(function(){ 
    $('.room_5').addClass('room_hover'); 
  }, function(){
    $('.room_5').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_6').hover(function(){ 
    $('.room_6').addClass('room_hover'); 
  }, function(){
    $('.room_6').removeClass('room_hover'); 
  })
});

$(function(){
  $('.td_free_7').hover(function(){ 
    $('.room_7').addClass('room_hover'); 
  }, function(){
    $('.room_7').removeClass('room_hover'); 
  })
});

   