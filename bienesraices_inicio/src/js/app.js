document.addEventListener('DOMContentLoaded', function(){
  
    eventListeners(); /* Funcion creada */
});
/* Estara escuchando el evento cuando el documento sea cargado htm, css y js. Y que ejectue la funcion */

function eventListeners(){
  const mobileMenu = document.querySelector('.mobile-menu'); /* Aqui seleccionamos especificamente un elemento del docu HTML, seria la clase mobile-menu */

  mobileMenu.addEventListener('click', navegacionResponsive);/* Cuando ocurra el evento de click en el elemento mobileMenu, se ejecutara o llamara la funcion*/
    
  
}

function navegacionResponsive() {
  //console.log('desde navegacionResponsive');
  const navegacion = document.querySelector('.navegacion'); //Seleccionamos el elemento navegacion

  if(navegacion.classList.contains('mostrar')){ /* Si contienen la clase de mostrar */
    navegacion.classList.remove('mostrar'); /* Quitamos la clase */
  }else{
    navegacion.classList.add('mostrar'); /* Lo agregamos a la clase */
  }

/*  navegacion.classList.toggle('mostrar'); La manera resumida seria asi */  

}