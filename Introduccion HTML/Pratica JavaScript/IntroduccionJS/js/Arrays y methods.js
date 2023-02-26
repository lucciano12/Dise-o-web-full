// Arreglos o Arrays

const numeros = [10,20,30,40,50];




// Acceder a los valores de un arreglo

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);  .length es para saber cuantos elemento tengo un arreglo

// numeros.forEach( function(numero) { Es un interador el forEach es lo mismo de acceder a los valores del arreglo pero mas rapido
//     console.log(numero);
// })




numeros.push(60,70,80); // Al final del arreglo
numeros.unshift(-10,-20,-30); // al inicio del arreglo

console.table(numeros); // .table te creara una tabla mostrando los valores y su index

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

/*  meses.splice(2, 1); // primer valor es el indice y el segundo cuantos valores quieres eliminar a partir de ahi
console.table(meses); */



// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio', ]; /* Copias el arreglo y le agregas el junio. Es recomienda ocupar este ya que no modificas el arreglo original */
console.log(nuevoArreglo);
