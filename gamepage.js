$( document ).ready(function() {


  function shuffleArray() {
    var images = ['apple', 'can','newspaper','bottle', 'battery','milk', 'lightbulb', 'pvc','plant','styrofoam', 'computer', 'plasticbottle','papertowel'];
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
    return images;
  }

  var images = shuffleArray();
  var bins = {"apple":"compost","can":"recycling","milk":"recycling","bottle":"recycling","newspaper":"recycling","battery":"hazardous", 'lightbulb':'hazardous','pvc':'trash','plant':'compost','styrofoam':'trash','computer':'hazardous',
  'plasticbottle':'recycling','papertowel':'compost'}
  var score=0;

function answer() {
  document.getElementById("result").style.visibility = 'hidden';
}

function show(){
  document.getElementById("result").style.visibility = 'visible';
}

function checkBin(can){
  if (bins[images[currentImageIndex]] === can ) {
    document.getElementById(images[currentImageIndex]).style.visibility = 'hidden';
    // add point
    score = score+1;
    document.getElementById('lblScore').innerHTML="Score: " + score;
    document.getElementById("result").style.visibility = 'visible';
    document.getElementById("result").innerHTML="You're correct!";
    window.setTimeout(answer,500);
    currentImageIndex = currentImageIndex + 1;
  }

  else {
    document.getElementById(images[currentImageIndex]).style.visibility = 'hidden';
    document.getElementById("result").style.visibility = 'visible';
    document.getElementById("result").innerHTML="Nope!";
    window.setTimeout(answer,500);
    currentImageIndex = currentImageIndex + 1;

  }

  console.log(currentImageIndex);
  if(currentImageIndex >= 13) {
    document.getElementById("score").innerHTML = "You got "+score+" out of 13 correct!"+"<br>"+"<b>"+"Refer back to the website to learn more about the answers you missed."+"</b>";
  }
  else {
    swapImage();
  }
}

  $('#recycling').click(function(){
    checkBin("recycling");

  })

  $('#compost').click(function(){
    checkBin("compost");

  })

  $('#trash').click(function(){
    checkBin("trash");

  })

  $('#hazardous').click(function(){
    checkBin("hazardous");

  })
 var q=0;

 var currentImageIndex = 0;

 function swapImage(){
      document.getElementById("startscreen").setAttribute('src','recyclingSymbol.png');
      document.getElementById("startscreen").setAttribute("height", "400");
      document.getElementById("startscreen").setAttribute("width", "400");
      document.getElementById("lblScore").style.visibility = 'visible';
      document.getElementById("background").style.marginLeft = '250px';
      document.getElementById("background").style.marginTop= '100px';
      document.getElementById('start').style.visibility = 'hidden';
      document.getElementById(images[currentImageIndex]).style.visibility = 'visible';
      document.getElementById('trash').style.visibility = 'visible';
      document.getElementById('compost').style.visibility = 'visible';
      document.getElementById('hazardous').style.visibility = 'visible';
      document.getElementById('recycling').style.visibility = 'visible';
  }

  $("#start").click(swapImage);

});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
