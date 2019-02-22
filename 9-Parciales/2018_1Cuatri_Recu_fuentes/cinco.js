function mostrar() {

var precio;
var mediosDePago;
var descuento;
var paquete;
var neto;
var descuentoPorPaquete;

precio = parseInt(prompt("Por favor ingresa el monto"));
mediosDePago = prompt("Ingrese su medio de pago");
paquete = prompt("Por favor ingresa el paquete que prefieres");

switch (mediosDePago) {
  case "Visa":
  case "MercadoPago":
  	descuento = precio * 0.1;
    total = precio - descuento;
    break;
  case "Paypal":
  switch(paquete) {
  	case "todoIncluido":
  	descuento = precio * 0.25;
  	total = total - descuento;
  	break;
  	default:
  	descuento = precio * 0.15;
  	total = precio - descuento;
  	break;
    }

  case "Efectivo":
  switch(paquete) {
  	case "todoIncluido":
  	descuento = precio * 0.35;
  	total = precio - descuento;
  case "todoIncluido":
  	descuentoPorPaquete = total * 0.15;
  	total = total - descuentoPorPaquete;
  case "soloDesayunos":
  	descuentoPorPaquete = total * 0.1;
  	total = total - descuentoPorPaquete;
    break;
} 0.35, 0.3, 0.2

  default:
  	descuento = precio * 0.05;
  	total = precio - descuento;
}
alert(`Su total es ${total}, el paquete elegido es ${paquete}`);

}

