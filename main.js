$(document).ready(function(){
  var burgermenu = $('hamburger-menu');
  var aperto = true 

  burgermenu.click(function(){
    if(aperto){
      burgermenu.hide();
    }else{
      burgermenu.show()
    }

    aperto = !aperto
  })

})