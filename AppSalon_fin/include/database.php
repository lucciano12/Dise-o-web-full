<?php

$db = mysqli_connect('localhost','root','lucciano','appsalon'); // Conectar a la base de datos

if(!$db){ //Si la base de dato esta vacio o no hay nada
  echo "Error en la conexion";
  exit; //Nos sirve para que deje de ejecutar las siguiente lineas de codigo. Este caso, solo se ejecutara esa condicional
}

echo "Conexion correcta";