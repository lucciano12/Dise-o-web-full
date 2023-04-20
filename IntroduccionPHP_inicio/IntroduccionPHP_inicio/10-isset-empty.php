<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Juan', 'Pedro', 'Karen');
$cliente = [
  'nombre' => 'Juan',
  'saldo' => 200
];

//Empty (Revisa si un arreglo esta vacio)
var_dump(empty($clientes));
var_dump(empty($clientes3));
var_dump(empty($clientes2));

echo "<br>";

//Isset (Revisa si existe un arreglo)
var_dump(isset($clientes4));

echo "<br>";
// Isset (Revisa si existe un elemento en un arreglo)
var_dump(isset($cliente['nombre']));
var_dump(isset($cliente['codigo']));

include 'includes/footer.php';