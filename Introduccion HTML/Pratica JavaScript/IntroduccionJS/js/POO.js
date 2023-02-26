//Clases

class Producto {

  constructor(nombre,precio) {
    this.nombre = nombre;
    this.precio=precio
  }

  formatearProducto(){
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
  }
}

const producto2 = new Producto('Monitor Curvo de 49', 800);
const producto3 = new Producto('Laptop', 300);


console.log(producto2);
console.log(producto3);