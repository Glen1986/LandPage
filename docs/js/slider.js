$(function(){
  var delay = 3000;
  var curIndex = 0;
  var amt;


  initSlider();
  autoPlay();
  function initSlider(){
    amt = $('.sobre-autor').length; 
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;
    $('.sobre-autor').css('width',sizeBoxSingle+'%');
    $('.scrollWraper').css('width',sizeContainer+'%');

    for(var i = 0; i < amt; i++){
      if(i == 0){
        $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
      }else{
        $('.slider-bullets').append('<span></span>');
    }
   }
  }
  function autoPlay(){
    setInterval(function(){
      curIndex++;
      if(curIndex == amt)
        curIndex = 0;
      goToSlider(curIndex);
      console.log('ok');
    },delay)
  }
  function goToSlider(curIndex){
    var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
    $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
    $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170)');
    $('.scrollEquipe').animate({'scrollLeft': offSetX});
  }
  $(window).resize(function(){
     $('.scrollEquipe').stop().animate({'scrollLeft':0});
  })
})
