/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var monto = parseInt(importe.value);
  var descuento = monto * 0.25;
  var resultadoTotal = monto - descuento;
  resultado.value = resultadoTotal;
}
