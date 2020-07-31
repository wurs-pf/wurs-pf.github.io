$(document).on('click','.jump',function(event){
  event.preventDefault();
  var target=$(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});