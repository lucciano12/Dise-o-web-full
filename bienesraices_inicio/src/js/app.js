document.addEventListener('DOMContentLoaded', function(){
  
    eventListeners(); /* Funcion creada */

    darkMode();
});
/* Estara escuchando el evento cuando el documento sea cargado htm, css y js. Y que ejectue la funcion */

function darkMode(){

  const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  //console.log(prefiereDarkMode.matches);

  if(prefiereDarkMode.matches){
    document.body.classList.add('dark-mode');
  }else{
    document.body.classList.remove('dark-mode');
  }

  prefiereDarkMode.addEventListener('change', function(){
    if(prefiereDarkMode.matches){
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
    }
  
  })

  const botonDarkMode = document.querySelector('.dark-mode-boton');

  botonDarkMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode'); //Esto nos sirve para reconocer si esta la clase de dark mode. Al apretar el boton activa el modo nocturno. En detalle
    //Apretamos el boton y aparece la clase dark mode en el body o desaparece
  });
}

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