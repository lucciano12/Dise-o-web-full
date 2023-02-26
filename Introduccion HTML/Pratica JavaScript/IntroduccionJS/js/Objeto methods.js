// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze .seal Congelar el objeto para que no se pueda agregar mas atributo y valores

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);