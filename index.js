$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');
    $('.botonMenu').toggleClass('animacionMenuOpen');
    $('.botonMenu').toggleClass('buttonBlock');
    $('.botonMenu').toggleClass('animacionMenuClose');
  
    const flecha = document.getElementsByClassName("hamburger");
    const flecha1 = document.getElementsByClassName("hamburger-inner");
    
    if (flecha[0].classList.contains('open')) {
        flecha1[0].style.top = '35px';
    } else {
        flecha1[0].style.top = '25px';
    }
});

document.getElementById('inicio').onmousemove = animateCircles; // Circulos sigue al raton

var colors = ['#5E5855', '#DECEC8', '#AEA19C', '#495240', '#C3B2A4', '#000000']

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  // Añadir movimiento
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // Aleatorizar colores
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // Añadir Animación
  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
  function marcar(){
    circle.classList.add('borrable')
  }
  setTimeout(marcar, 500);

  setInterval(function () {
      var circulos = document.getElementsByClassName('borrable');
      for(i = 0; i < circulos.length; i++){
            circulos[i].remove();
      }
  }, 5000);
}


$('input, textarea').focus(function () {
  $(this).prev('label').addClass('after');
});

$('input, textarea').blur(function () {
  if( !this.value){
    $(this).prev('label').removeClass('after');
  }
});
