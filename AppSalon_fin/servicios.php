<?php

require "include/funciones.php"; //Importar la funcion que muestra los servicios

$servicios = obtenerServicios(); //Llamar a la funcion que esta en funciones.php

//var_dump($servicios); //Verificar que la funcion este funcionando correctamente

echo json_encode($servicios); //Convierte el arreglo en un JSON