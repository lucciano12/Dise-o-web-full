/* Contendeor de nuestras tareas, aqui se realizaran las funciones y se conectara 
al package.json. Entonces gulp en general es para optimizar tareas */

const {src, dest, watch, parallel} = require("gulp"); //require importar o extraer la dependencia de gulp
/* Src --> Identificar un archivo
 dest --> almacenar el archivo */

 //CSS
const sass = require('gulp-sass')(require('sass')); // sass en el const, es la funcion a llamar cuando lo compilemos ya que estamos importando el script del package.json
const plumber = require('gulp-plumber'); //Importamos plumber



// Imagenes 
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp'); 
const avif = require('gulp-avif');



function versionWebp(done){

  const opciones = {
    quality:50
  };

  src('src/img/**/*.{png,jpg}')
  .pipe(webp(opciones))
  .pipe(dest('build/img'))

  done();
}

function versionAvif(done){

  const opciones = {
    quality:50
  };

  src('src/img/**/*.{png,jpg}')
  .pipe(avif(opciones))
  .pipe(dest('build/img'))

  done();
}

function imagenes(done){

  const opciones = {
    optimizationLevel: 3
  }

  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin()))
    .pipe(dest('build/img')) 
  done();
}

//CSS
function css(done){
  //Indentificar el archivo SASS
  src('src/scss/**/*.scss')
    //Compilar
    .pipe(plumber())
    .pipe(sass())
    //Almacenarla en el disco duro
    .pipe(dest("build/css"))

  done(); // Callback que avisa a gulp cuando llegamos al final. done() dice que finaliza la funcion de arriba
}



//Compilar con dev en npm
function dev(done){
  watch('src/scss/**/*', css); 

  done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,versionWebp,versionAvif,dev); //Compilan paralelamente





//**EJEMPLO DE NPM Y NPX PARA EJECUTAR LOS SCRIPTS */

/* function tarea(done){
  console.log("mi primera tarea");

  done();
} */

/* exports.primerTarea = tarea; */ /* CODIGO NODE.JS. Cuando mande llamar "primeraTarea, se ejecuta "tarea"*/
/* exports.tarea = tarea; */