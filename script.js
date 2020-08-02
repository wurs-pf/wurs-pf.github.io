var f=false;
$(".topcircle").click(function(){
  if(f=!f){
    $('.topcircle').css("background-color","#f24");
    $('.block').show(300);
  }else{
    $('.topcircle').css("background-color","#62b6cb");
    $('.block').hide(300)
  }
});

$(document).on('click','.jump',function(event){
  event.preventDefault();
  var target=$(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});