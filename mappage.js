function myMap() {
  //list of recycling center coordinates
  centerList = [
    ["<b>"+"Synergis Zero Waste Group"+"</b>"+"<br>"+"4096 Piedmont Ave, Oakland, CA 94611"+"<br>"+"", 37.827017, -122.252424],
    ["<b>"+"American Hauling"+"</b>"+"<br>"+"1510 32 St #3, Oakland, CA 94608", 37.823959, -122.285933],
    ["<b>"+"Sims Metal Management"+"</b>"+"<br>"+"600 S 4th St, Richmond, CA 94804", 37.923476, -122.365641],
    ["<b>"+"Berkeley Recycling Center"+"</b>"+"<br>"+"669 Gilman St, Berkeley, CA 94530", 37.878899, -122.304594],
    ["<b>"+"El Cerrito Recycling Center"+"</b>"+"<br>"+"7501 Schmidt Ln, El Cerrito, CA 94530", 37.920078, -122.298757],
    ["<b>"+"Computer and Technology Resource Center"+"</b>"+"<br>"+"620 Page St, Berkeley, CA 94710", 37.875627, -122.304650],
    ["<b>"+"Ohmega Salvage"+"</b>"+"<br>"+"2400 & 2403 San Pablo Avenue, Berkeley, CA 94702", 37.862766, -122.290053],
    ["<b>"+"Cass inc"+"</b>"+"<br>"+"2730 Peralta St, Oakland, CA 94607", 37.820192, -122.286091],
    ["<b>"+"National Recycling Corporation"+"</b>"+"<br>"+"1312 Kirkham Ct, Oakland, CA 94607", 37.810902, -122.290000],
    ["<b>"+"Lakeside Non-Ferrous Metals"+"</b>"+"<br>"+"412 Madison St, Oakland, CA 94607", 37.795457, -122.267502],
    ["<b>"+"Inner City Recycling"+"</b>"+"<br>"+"9009 Railroad Ave, Oakland, CA 94603", 37.741741, -122.187654],
    ["<b>"+"Hi-Tec Recycling"+"</b>"+"<br>"+"631 S 31st St, Richmond, CA 94804", 37.923956, -122.339805],
    ["<b>"+"Perez Brothers Paper Recycling"+"</b>"+"<br>"+"598 Spring St, Richmond, CA 94804", 37.923415, -122.337059],
    ["<b>"+"American Iron and Metal co"+"</b>"+"<br>"+"1050 Brookside Dr, Richmond, CA 94801", 37.963621, -122.357830],
    ["<b>"+"Action Metal Recycling"+"</b>"+"<br>"+"385 Pittsburg Ave, Richmond, CA 94801", 37.963715, -122.373391],
    ["<b>"+"Foam Recycle LLC"+"</b>"+"<br>"+"1005 Broadway Ave, San Pablo, CA 94806", 37.975376, -122.352004],
    ["<b>"+"East Bay Resources"+"</b>"+"<br>"+"2430 Willow St, Oakland, CA 94607", 37.820449, -122.290003],
    ["<b>"+"Recology"+"</b>"+"<br>"+"520 3rd St, Oakland, CA 94607", 37.797972, -122.277167]


  ];
var infowindow = new google.maps.InfoWindow()

  var mapProp = {
      //center of map and zoom factor
      center:new google.maps.LatLng(37.867153, -122.279522),
      zoom:10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //itterate through centerList
  function placePins(centerList, map){
    //for (var i = 0; i < centerList.length; i++){
      // var latLng = new google.maps.LatLng( centerList[1], centerList[2]);
      var marker = new google.maps.Marker({
          position: {lat: centerList[1], lng: centerList[2]},
          map: map,
          icon: "https://image.ibb.co/kymg2F/rsz_1rsz_green_pin.png"
      });
      google.maps.event.addListener(marker, 'click', function(){
          infowindow.close(); // Close previously opened infowindow
          infowindow.setContent(centerList[0]);
          infowindow.open(map, marker);
      });
  }
  for(var i=0; i<centerList.length; i++) {
      placePins( centerList[i], map );
    }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
