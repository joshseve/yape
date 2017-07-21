// Transicion de d A e
 var cambioPagina = function () {
   setTimeout(function () {
      location.href="/views/e_tarjeta.html"
  },5000)
};

// Cargar hasta que este listo todo el documento.
$(document).ready(cambioPagina);
