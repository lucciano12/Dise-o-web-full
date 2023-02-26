
const boton = document.querySelector('#boton'); //document es el todo de la pagina y querySelector es la forma en que vas a seleccionar contenido HTML

boton.addEventListener('click', () => { // addEventListener es la funcion que nos va a permitir registrar un evento a esta variable
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})



if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}