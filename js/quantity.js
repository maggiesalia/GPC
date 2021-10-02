
// quantity on description page
const counter = document.querySelectorAll('.quantity-wrapper');

counter.forEach(element => {
  const input = element.querySelector('input');
  const minBtn = element.querySelector('#min');
  const plusBtn = element.querySelector('#plus');
  const minValue = 0;
  const maxValue = 24;

  function checkButton() {
    if (input.value == minValue) {
      minBtn.disabled = true;
      plusBtn.disabled = false;
    } else if (input.value == maxValue) {
      minBtn.disabled = false;
      plusBtn.disabled = true;
    } else {
      minBtn.disabled = false;
      plusBtn.disabled = false;
    }
  } 
  // Set button when first loaded
  window.addEventListener('DOMContentLoaded', checkButton);

  // Set button when input was changed
  input.addEventListener('.quantity-wrapper input', checkButton);


  // Add listener when button has clicked
  minBtn.addEventListener('click', () => {
    input.value = Number(input.value) - 1;
    checkButton();
  })

  plusBtn.addEventListener('click', () => {
    input.value = Number(input.value) + 1;
    checkButton();
  })   
});







// popup on buy button
$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}


// popup 
const buy = document.querySelector('.buy-all');

const popup = document.querySelector('.popup');


buy.addEventListener('click', function() {
  popup.style.display = "block";
})

const closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', () => {
    popup.style.display = "none";
})

