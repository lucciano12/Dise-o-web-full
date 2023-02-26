// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior de guardar el valor de una de las propiedades del objeto en una variable
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Destructuring, declaramos y guardamos en la misma variable definida en el objeto. Mas facil :)
const {precio, nombreProducto } = producto; // tienes que ser igualado al objeto, ya que donde sacamos los valores... EN EL OBJETO

console.log(precio);
console.log(nombreProducto);