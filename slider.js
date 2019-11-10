var slideIndex = 1;


function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function load() {
  for (var i = 0; i < 2; i++) {
      cloneSlide();
      cloneDot();
  }
  showSlide(slideIndex);
  

}

function cloneSlide() {
  var slideTemplate = document.getElementById('slide-template');

  var clone = slideTemplate.cloneNode(true);
  slideTemplate.parentElement.prepend(clone);

}
function cloneDot() {
  var dotTemplate = document.getElementById('dot-template');

  var clone = dotTemplate.cloneNode(true);

  dotTemplate.parentElement.appendChild(clone);

}

load();