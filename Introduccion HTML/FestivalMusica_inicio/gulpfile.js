/* Contendeor de nuestras tareas, aqui se realizaran las funciones y se conectara 
al package.json. Entonces gulp en general es para optimizar tareas */

const {src, dest, watch} = require("gulp"); //require importar o extraer la dependencia de gulp
/* Src --> Identificar un archivo
 dest --> almacenar el archivo */
const sass = require('gulp-sass')(require('sass')); // sass en el const, es la funcion a llamar cuando lo compilemos ya que estamos importando el script del package.json
const plumber = require('gulp-plumber'); //Importamos plumber


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

function dev(done){
  watch('src/scss/**/*', css); //Primero la direccion del archivo a escuchar y la funcion que se quiere mandar a llamar


  done();
}

exports.css = css;
exports.dev = dev;






//**EJEMPLO DE NPM Y NPX PARA EJECUTAR LOS SCRIPTS */

/* function tarea(done){
  console.log("mi primera tarea");

  done();
} */

/* exports.primerTarea = tarea; */ /* CODIGO NODE.JS. Cuando mande llamar "primeraTarea, se ejecuta "tarea"*/
/* exports.tarea = tarea; */