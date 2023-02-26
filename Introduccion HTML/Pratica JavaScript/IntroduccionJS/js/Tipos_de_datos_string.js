//String o Cadena de Textos
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
const producto2= String("Monitor 30 pulgada"); //Otra manera de escribir llamado constructor
const producto3 = new String("Monitor 50 Pulgadas"); //Otro constructor o inicializando un objeto

console.log(tweet);
console.log(typeof(producto2));
console.log(typeof(producto3)); //Con typeof sabemos el tipo de dato

// Ejemplo de como ocupar metodos

//length es para la extension. Cuanto caracter tiene el valor de la variable
console.log(tweet.length);

//IndexOf (retorna posicion)
console.log(tweet.indexOf("JavaScript "));
console.log(producto2.indexOf("Tablet"));

//Includes (retorna true o false)

console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));