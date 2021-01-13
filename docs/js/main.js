$(function(){
  $('nav.mobile-menu').click(function(){
    var listaMenu = $('nav.mobile-menu ul')


if(listaMenu.is(':hidden') == true){
  listaMenu.css('display', 'block');
  console.log('ok');
 }else{
      listaMenu.css('display', 'none');
      console.log('off');
    }
  })     
})



