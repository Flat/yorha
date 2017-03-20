//ellipsis
setInterval(function() {
  var ellipsis = $('#loadDots');
  if(ellipsis.text().length < 3) {
    ellipsis.text(ellipsis.text() + ".");
  } else {
    ellipsis.text("");
  }
}, 300);

//scan bars
setInterval(function() {
  var scanbar = $('#scanbars');
  var size = 1 + Math.floor(Math.random() * 35);
  var location = 1 + Math.floor(Math.random() * 90);
  scanbar.css("padding-top", size.toString() + "%")
  scanbar.css("bottom", location.toString() + "%")
}, 100);