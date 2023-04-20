<?php include 'includes/header.php';

//in_array buscar elementos en un arreglo
$carrito = ['Tablet', 'Television', 'Computadora'];

var_dump(in_array('Tablet', $carrito));
var_dump(in_array('Audifonos', $carrito));

//Ordenar un arreglo o sus elementos
$numeros = array(1,6,4,5,3,10,2,7,8,9);
sort($numeros); //Ordena de menor a mayor
rsort($numeros); //Ordena de mayor a menor

echo "<pre>";
var_dump($numeros);
echo "</pre>";

//Ordenar un arreglo asociativo
$cliente = array(
  'saldo' => 200,
  'tipo' => 'Premium',
  'nombre' => 'Juan'
);

echo "<pre>";
var_dump($cliente);
echo "</pre>";

asort($cliente); //Ordena de menor a mayor segun el valor de los elementos del arreglo (Orden alfabetico)
arsort($cliente); //Ordena de mayor a menor segun el valor de los elementos del arreglo (Orden alfabetico y despues los numeros)
ksort($cliente); //Ordena por llave de menor a mayor (Orden alfabetico)
krsort($cliente); //Ordena por llave de mayor a menor (Orden alfabetico


echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';