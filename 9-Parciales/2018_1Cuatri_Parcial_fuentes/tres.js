function mostrar() {
  var precio;
  var porcentajeDescuento;
  var descuento;
  var total;

  precio = parseInt(prompt("Ingrese su precio"));
  porcentajeDescuento = parseInt(prompt("Ingrese su porcentaje de descuento"));

  descuento = precio * porcentajeDescuento/100;

  total = precio - descuento;

  alert("Su precio final es: " + total);

  document.getElementById("elPrecioFinal").value = total;

}
