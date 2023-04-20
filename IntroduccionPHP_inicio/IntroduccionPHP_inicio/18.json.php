<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet', 
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión 24"', 
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo', 
        'precio' => 400,
        'disponible' => false
    ]
];

echo "<pre>";
var_dump($productos);

$json = json_encode($productos, JSON_UNESCAPED_UNICODE); // JSON_UNESCAPED_UNICODE es para que no se escape los caracteres especiales

$json_array = json_decode($json); // Para convertirlo en un array

var_dump($json);
var_dump($json_array);
echo "</pre>";




include 'includes/footer.php';