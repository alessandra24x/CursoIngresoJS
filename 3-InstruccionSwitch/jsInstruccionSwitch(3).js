function mostrar()
{
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
  case "Febrero":
    mesDelAño = "Este mes no tiene más de 29 días."
    break;
  default:
    mesDelAño = "Este mes tiene 30 o más días";
}
alert(mesDelAño);

}//FIN DE LA FUNCIÓN