document.addEventListener('DOMContentLoaded', function () { //la funcion se ejecutara cuando la pagina en html haya sido cargada y el DOM haya sido manipulado
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
}


function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= 12; i++) { //Son 12 elementos
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
      <source srcset="build/img/thumb/${i}.avif" type="image/avif">
      <source srcset="build/img/thumb/${i}.webp" type="image/webp">
      <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.avif" alt="imagen galeria">
    `;

    imagen.onclick = function () {
      mostrarImagen(i);
    }

    galeria.appendChild(imagen);
  }


}


function mostrarImagen(id) {
  const imagen = document.createElement('picture');
  imagen.innerHTML = `
      <source srcset="build/img/grande/${id}.avif" type="image/avif">
      <source srcset="build/img/grande/${id}.webp" type="image/webp">
      <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
  `;


  // Crea el Overlay con la imagen
  const overlay = document.createElement('DIV'); //Crea elemento DIV
  overlay.appendChild(imagen); //Se agrega el elemento imagen como hijo del elemeto definido en overlay
  overlay.classList.add('overlay'); // Se crea la clase llamada overlay
  

  //Cuando hacemos click en el fondo negro cuando la imagen esta grande para que se vaya
  overlay.onclick = function () {

    const body = document.querySelector('body');  //Se selecciona el elemento body
    body.classList.remove('fijar-body'); //Se elemina la clase fijar-body
    overlay.remove(); // Se elemina el elemento definido en overlay, que es el div

  }


  // Boton para cerrar el Modal
  const cerrarModal = document.createElement('P');
  cerrarModal.textContent = 'X'; //Crea contenido en pantalla
  cerrarModal.classList.add('btn-cerrar');
 
  cerrarModal.onclick = function () {

    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
    overlay.remove();

  }

  overlay.appendChild(cerrarModal);


  // Añadirlo al HTML
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');

}