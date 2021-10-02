var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// logged in user page js
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}
function About(){
  document.getElementById("aboutus").classList.toggle("show");
}
function gpc(){
  document.getElementById("pharmacy").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var aboutus = document.getElementById("aboutus");
    if (aboutus.classList.contains('show')) {
      aboutus.classList.remove('show');
    }
  }
}



// slider on index page
var imageWidth = 10;
   
$(".box-wrapper").width($(".image").length*imageWidth);


// tap products on index page 
function openWindow(evt, tabname){
  var i, main, button;
  main = document.getElementsByClassName("main");
  for (i = 0; i < main.length; i++) {
    main[i].style.display = "none";
  }
  button = document.getElementsByClassName("button");
  for (i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active"
}

// description page 
function openBar(evnt, barName){ 
  var i, tab, baritem;
  tab = document.getElementsByClassName("bar-tab");
  for (i = 0; i < tab.length; i++){
    tab[i].style.display = "none";
  }
  baritem = document.getElementsByClassName("bar-item");
  for (i = 0; i < baritem.length; i++){
    baritem[i].className = baritem[i].className.replace(" active", "");
  }
  document.getElementById(barName).style.display = "block";
  evnt.currentTarget.className += " active"
}




