function mostrar() {

var precio;
var mediosDePago;
var descuento;
var paquete;
var total;

precio = parseInt(prompt("Por favor ingresa el monto"));
mediosDePago = prompt("Ingrese su medio de pago");
paquete = prompt("Por favor ingresa el paquete que prefieres");

switch (mediosDePago) {
  case "Visa":
  case "MercadoPago":
  	descuento = 0.1;
    break;
  case "Paypal":
  switch(paquete) {
  	case "todoIncluido":
  	descuento = 0.25;
  	break;
  	default:
  	descuento = 0.15;
  	break;
    }
		break;
  case "Efectivo":
  switch(paquete) {
  case "todoIncluido":
		descuento = 0.35;
		break;
  case "soloDesayunos":
		descuento = 0.3;
		break;
  default:
  	descuento = 0.2;
    break;
}
		break;
  default:
		descuento = 0.05;
		break;
}
descuento = precio * descuento;
total = precio - descuento;
alert(`Su total es ${total}, el paquete elegido es ${paquete}`);

}

