//This (hace referencia a las propiedades del objeto sobre el cual se esta ejecutando)


const reservacion  = {
  nombre: 'Lucciano',
  apellido: 'Bato',
  total: 5000,
  pagado: false,
  informacion: function(){ /* El this, se esta ocupando para esta funcion que es propiedad del objeto reservacion*/
    console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
  }
}

const reservacion2 = {
  nombre: 'Jose',
  apellido: 'Bato',
  total: 5000,
  pagado: false,
  informacion: function(){ /* El this, se esta ocupando para esta funcion que es propiedad del objeto reservacion*/
    console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
  }
}


reservacion.informacion();
reservacion2.informacion() ;