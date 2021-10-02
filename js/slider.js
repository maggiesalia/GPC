
var slideIndex = 1;
showClarins(slideIndex);

function plusSlides(n) {
  showClarins(slideIndex += n);
}

function currentClarins(n) {
  showClarins(slideIndex = n);
}

function showClarins(n) {
  var i;
  var clarins = document.getElementsByClassName("clarins");
  var freckle = document.getElementsByClassName("freckle");
  if (n > clarins.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = clarins.length}
  for (i = 0; i < clarins.length; i++) {
    clarins[i].style.display = "none";  
  }
  for (i = 0; i < freckle.length; i++) {
    freckle[i].className = freckle[i].className.replace(" active", "");
  }
  clarins[slideIndex-1].style.display = "block";  
  freckle[slideIndex-1].className += " active";
}