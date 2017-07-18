// Aqui especifico los requerimientos de las dependencias necesarias

// Requiero GULP para automatizar tareas
var gulp = require('gulp');
// Para procesar SASS
var sass = require('gulp-sass');

// configuro mis rutas
var config = {
  js: "js/*.js",
  source: 'src/',
  dist: './public',
  sass:'src/assets/scss/*.scss'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  js: "js/**/*.js",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS:"js/main.js"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
};

// Esta tarea de Gulp copia los archivos HTML del desarrollo a Public.
gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
  gulp.src(sources.mainSass).pipe(gulp.dest(config.dist));
});

gulp.task('js', ()=>{
  gulp.src(sources.rootJS).pipe(gulp.dest(config.dist + paths.assets + "js"));
});
