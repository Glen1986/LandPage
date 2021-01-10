/*
const grid = Muuri('.grid', {
layout:{
rounding: false
}
});

window.addEventListener('load',() => {
document.getElementById('grid').classList.add('imagenes-cargadas');
});
*/
window.onload = function(){
  var map;

  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(-23.5464,-46.6461),
      zoom: 15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), mapProp);
  }
  function addMarker(lat,long,icon,content,click){
    var latLng = {'lat':lat, 'lng': long};

    var marker = new google.maps.Marker({
      position:latLng,
      map:map,
      icon:icon
    });

    var infoWindow = new google.maps.InfoWindow({
      content:content,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,20)
    });

    if(click== true){
    
    google.maps.event.addListener(marker,'click',function(){
      infoWindow.open(map,marker);
      });

    }else{
      infoWindow.open(map,marker);
    }
  }
  initialize();
  var contenido = '<p style="color:black;font-size:13px;padding:10px 0;">Meu Endereço</p>';  
  addMarker(-23.5464,-46.6461,'',contenido,true);
}
