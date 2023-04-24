<?php

function obtenerServicios(): array{
  try {
    
    //Importar una conexion
    require 'database.php';

    //var_dump($db); Verificamos el detalle de la conexion (No es necesario, pero ayuda)


    //Escribir el codigo SQL

    $sql = "SELECT * FROM servicios";
    $consulta = mysqli_query($db, $sql); // Con esto nos permite consultar una base de dato, ya en PHP. Como parametro seria la conexion SQL y su query o consulta que queramos realizar

    //Arreglo vacio
    $servicios = []; 

    $i=0;

    //Obtener los resultados
    while($row = mysqli_fetch_assoc($consulta)){ 
      $servicios[$i]['id'] = $row['id']; //Agrega los resultados a un arreglo
      $servicios[$i]['nombre'] = $row['nombre']; 
      $servicios[$i]['precio'] = $row['precio']; 

      $i++;
      //Dentro de este while, se va a ir agregando los resultados de la consulta a un arreglo unico
    }
    

    /* echo "<pre>";
    var_dump($servicios); //Transforma el resultado de la consulta en un array de PHP
    echo "</pre>" */;

    return $servicios; //Retorna el arreglo con los resultados de la consulta


  } catch (\Throwable $th) {
    var_dump($th);
  }
}


obtenerServicios();