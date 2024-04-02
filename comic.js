var lab1 = document.querySelector('.lab1');
var circulo1 = document.querySelector('.circulo1')

circulo1.addEventListener('click', cambioImagen)

function cambioImagen(){
    lab1.setAttribute("src" , "./imagenes/laboratorioanimado1.gif")
    circulo1.classList.add('oculto')
    setTimeout(function(){
        lab1.setAttribute("src" , "./imagenes/laboratorio1max.png")
    },5000)
}

var lab2 = document.querySelector('.lab2');
var circulo2 = document.querySelector('.circulo2')

circulo2.addEventListener('click', cambioImagen1)

function cambioImagen1(){
    lab2.setAttribute("src" , "./imagenes/laboratorioanimado2.gif")
    circulo2.classList.add('oculto')
    setTimeout(function(){
        lab2.setAttribute("src" , "./imagenes/laboratorio2max.png")
    },5000)
}

var lab3 = document.querySelector('.lab3');
var circulo3 = document.querySelector('.circulo3')

circulo3.addEventListener('click', cambioImagen2)

function cambioImagen2(){
    lab3.setAttribute("src" , "./imagenes/casadelily.gif")
    circulo3.classList.add('oculto')
    setTimeout(function(){
        lab3.setAttribute("src" , "./imagenes/casadelily.png")
    },5000)
}

var lab4 = document.querySelector('.lab4');
var circulo4 = document.querySelector('.circulo4')

circulo4.addEventListener('click', cambioImagen3)

function cambioImagen3(){
    lab4.setAttribute("src" , "./imagenes/pruebamax.gif")
    circulo4.classList.add('oculto')
    setTimeout(function(){
        lab4.setAttribute("src" , "./imagenes/pruebamax.png")
    },5000)
}

function avance1() {
    const targetCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'));
    targetCarousel.to(0); // Cambia el número según la posición de tu diapositiva
  }

function avance2() {
    const targetCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'));
    targetCarousel.to(2); // Cambia el número según la posición de tu diapositiva
  }
  

  function avance3() {
    const targetCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'));
    targetCarousel.to(7); // Cambia el número según la posición de tu diapositiva
}

function avance4() {
    const targetCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'));
    targetCarousel.to(12); // Cambia el número según la posición de tu diapositiva
}