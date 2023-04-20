<?php include 'includes/header.php';

$nombreCliente = "Juan Pablo";

//Conocer extension de un string
echo strlen($nombreCliente); // Cuenta los caracteres de la variable
var_dump($nombreCliente);

//Eliminar espacios en blanco (Sirve para los forums para evitar que se escriban espacios en blanco)
$texto = trim($nombreCliente);
echo strlen($texto);

echo "<br>";

//Convertir a mayusculas
echo strtoupper($nombreCliente);

echo "<br>";

//convertir a minusculas
echo strtolower($nombreCliente);

echo "<br>";

//Ojo los correo pueden ser mayuscula o minuscula
$mail1 = "correo@correo.com";
$mail2 = "Correo@correo.com";

var_dump($mail1 == $mail2); // Devuelve false porque son diferentes
var_dump(strtolower($mail1) == strtolower($mail2)); // Devuelve true porque los convierte a minuscula y son iguales

echo "<br>";

//Si queremos remplazar una letra
echo str_replace('Juan', 'J', $nombreCliente);

echo "<br>";

//Revisar si un string existe
echo strpos($nombreCliente, 'u'); // Devuelve la posicion de la letra

echo "<br>";

//Como concadera strings
$tipoCliente = "Premium";

echo "El cliente " . $nombreCliente . " es " . $tipoCliente; 

echo "<br>";

//Otra forma de concatenar strings

echo "El cliente $nombreCliente es $tipoCliente";

include 'includes/footer.php';
