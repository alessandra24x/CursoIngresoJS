function mostrar()
{
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
  case "Febrero":
    mesDelAño = "Febrero tiene 28 días salvo en los años bisiestos que tiene 29"
    break;
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    mesDelAño = "Tiene 30 días"
    break;
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    mesDelAño = "Tiene 31 días"
    break;
}
alert(mesDelAño);

}//FIN DE LA FUNCIÓN