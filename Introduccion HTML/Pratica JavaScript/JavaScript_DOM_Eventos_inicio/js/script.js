//querySelector (Seleccionar una clase --> .class y para un id ---> #xxxxx )

const heading = document.querySelector("#heading");
/* const heading = document.querySelector(".header__texto h2"); Otra manera de escribir. Retorna 0 a 1 Elementos*/
//console.log(heading);
/* Para modificar el contenido de un docu html en lenguaje JS */
heading.textContent = "Nuevo heading";

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


/* -----------------------------------------------------------------*/


//Crear HTML con createElement --->

//**Su objetivo es crear mas dinamismo a una consulta API, como base de dato o un formulario que esta completando el usuario**/

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A') //Se debe escribir en mayuscula que etiqueta o elemento crear

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //Esta funcion nos permite agregar un elemento, digamos, a una variable e insertarlo en otro lugar


/* console.log(nuevoEnlace.outerHTML); */


/* -----------------------------------------------------------------*/


//Evento (Los eventos que más comunes que suceden en automatico en cualquier sitio web es cuando el documento esta listo)

console.log(1);

window.addEventListener('load', function () { //**Es como un callback, ya que cuando ocurra el evento load se ejecuta la funcion */
  console.log(2);
}) // **Lo que hace es que el evento que estamos esperando, es que se haya cargado totalmente la ventana. Osea load espera a que el JS y los archivos que dependen del HTML estén listos.

//**addEventListener ---> Es la forma de registrar los elementos, es como un metodo. Cuando hay un evento asociado y una vez que ocurra el evento, el codigo se ejecuta 
//**load (EVENTO) --> Espera hasta que la ventana este lista.
//** addEventListener--> ESTAMOS ESCUCHANDO EL EVENTO.

//**OTRA MANERA DE HACER */

window.onload = () => {
  console.log(3);
}


//**TERCER EVENTO */

document.addEventListener('DOMContentLoaded', () => { //Solo espera por el HTML, pero no espera CSS o imagenes.
  console.log(4);
});


console.log(5);

window.onscroll = (evento) => {
  //console.log(evento);
}


//** EL EVENTO DE CLICK SE PUEDE OCUPAR PARA IMAGENES, TEXTO, O MEJOR CUALQUIER 
//**ELEMTO QUE QUERAMOS VALIDAR */

//Seleccionar elementos y asociarles un evento
//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', (evento) => {
  //console.log(evento);
  //evento.preventDefault();
  //console.log('enviando formulario');
//});


// Evento de los Inputs y Textarea

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); //Seleccionamos la clase .formulario

nombreInput.addEventListener('input', leerTexto); //Sirve para validar en tiempo real lo que se esta escribiendo en el input (Cuando el usuario escribe)
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


//El Evento de Submit
formulario.addEventListener('submit', function(evento){
  evento.preventDefault();

  //**Validar Formulario */

  const {nombre,email,mensaje}= datos;

  if(nombre ==='' || email === '' || mensaje === ''){
    mostrarAlerta('Todos los campos son obligatorio', true);
    return; //Corta la ejecucion del código. Previene la ejecucion del codigo.
  }
  
  // Crear la alerta de Enviar correctamente
  mostrarAlerta('Mensaje enviado correctamente');
  //console.log('Enviando Formulario');
});


function leerTexto(e) { //e esta almacenando los valores de los input
  /* console.log(e.target.value); */
  //console.log(e.target.id) // son los # de la querySelector o mejor dicho son los id de cada elemento del input en el HTML
  datos[e.target.id] = e.target.value; /* Estamos agregando los valores al objeto datos, cada posicion de su id*/
  //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
  const alerta = document.createElement('P'); //Crea el elemento
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add('error'); //Crea la clase
  }else{
    alerta.classList.add('correcto'); //Crea la clase
  }

  formulario.appendChild(alerta); //Agregamos el elemento alerta al elemento padre que es formulario o mejor dicho la clase formulario del elemento form

  //Desaparezca despues de 5 segundos
  setTimeout(()=>{
    alerta.remove();
  }, 5000);

}


