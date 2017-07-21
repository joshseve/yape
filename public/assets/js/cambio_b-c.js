// public\assets\js\cambio_b-c.js

// Transicion de b A c --- Para agilizar en vez de 21 segundos puse 5.
 var cambioPagina = function () {
   setTimeout(function () {
      location.href="/views/c_creaUsuario.html"
  },5000)
};

// Cargar hasta que este listo todo el documento.
$(document).ready(cambioPagina);
