//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; //Arreglo Unidimensional


const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500 },
  { nombre: 'Televisión 50 Pulgadas', precio: 700 },
  { nombre: 'Tablet', precio: 300 },
  { nombre: 'Audifonos', precio: 200 },
  { nombre: 'Teclado', precio: 50 },
  { nombre: 'Celular', precio: 500 },
  { nombre: 'Bocinas', precio: 300 },
  { nombre: 'Laptop', precio: 800 }
];

//forEach
meses.forEach(function (mes) { // mes es la variable que recorre el arreglo y almacena el valor
  if(mes=='Marzo'){
    console.log('Correcto existe')
  }
});

// Includes (Es mas sencillo que ocupar forEach)(Solo sirve para los que son tipo array unidimensional)
let resultado = meses.includes('Diciembre');

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
  return producto.nombre === 'Celular PRO'
})

//resultado = carrito.some(producto => producto.nombre == 'Celular PRO') Lo mismo escrito en arrown function

// Reduce (Realiza el total entregando una de las propiedades del objeto)
resultado = carrito.reduce(function(total, producto) { //En la funcion declaramos el total de la suma y el producto actual en este contexto o la variable que almacena las propiedades del objeto
  return total + producto.precio
}, 0); //Aca declaramos el valor incial


// Filter
resultado = carrito.filter(function(producto) {
  return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
  return producto.nombre !== 'Celular'
});


console.log(resultado);