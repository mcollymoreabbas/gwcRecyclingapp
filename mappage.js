function myMap() {
  //list of recycling center coordinates
  centerList = [
    [37.827017, -122.252424],
    [37.823959, -122.285933],
    [37.923476, -122.365641],
    [37.878899, -122.304594],
    [37.920078, -122.298757],
    [37.875627, -122.304650],
    [37.862766, -122.290053],
    [37.820192, -122.286091],
    [37.810902, -122.290000],
    [37.795457, -122.267502],
    [37.741741, -122.187654],
    [37.923956, -122.339805],
    [37.923415, -122.337059],
    [37.963621, -122.357830],
    [37.963715, -122.373391],
    [37.975376, -122.352004]
  ];

  centerNames = ["Synergis Zero Waste Group","American Hauling","Sims Metal Management","Berkeley Recycling Center"]
  var mapProp = {
      //center of map and zoom factor
      center:new google.maps.LatLng(37.867153, -122.279522),
      zoom:10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  placePins(centerList, map);

}
//itterate through centerList
function placePins(centerList, map){

  for (var i = 0; i < centerList.length; i++){
    var marker = new google.maps.Marker({
        position: {lat: centerList[i][0], lng: centerList[i][1]},
        map: map,
        icon: "greenPin.png"
    });
  }
  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent('<strong>' + place.name + '<strong>' + '<br>' + place.formatted_address);

  });
    // var infowindow = new google.maps.infowindow({
    //   content: name
    // });
    // google.maps.event.addListener(marker,'click',function(){
    //
    // });
}
// function getNames(){
//   for (k = 0; k < centerNames.Length; k++){
//     var names = centerNames[k];
//   }
// }
// function infowindow(names){
//   var infowindow = new google.maps.InfoWindow({
//           content: names
//   });
//   marker.addListener('click', function() {
//           infowindow.open(map, marker);
//   });
// }
