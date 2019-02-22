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
  	descuento = precio * 0.1;
    total = precio - descuento;
    break;
  case "Paypal":
  	descuento = precio * 0.15;
  	total = precio - descuento;
  switch(paquete) {
  	case 


  case "todoIncluido"
  	descuentoPorPaquete = total * 0.1;
  	total = total - descuentoPorPaquete;
    break;
    }
  case "MercadoPago":
  	descuento = precio * 0.1;
  	total = precio - descuento;;
    break;
  case "Efectivo":
  	descuento = precio * 0.2;
  	total = precio - descuento;
  case "todoIncluido":
  	descuentoPorPaquete = total * 0.15;
  	total = total - descuentoPorPaquete;
  case "soloDesayunos":
  	descuentoPorPaquete = total * 0.1;
  	total = total - descuentoPorPaquete;
    break;
  default:
  	descuento = precio * 0.05;
  	total = precio - descuento;
}
alert(`Su total es ${total}, el paquete elegido es ${paquete}`);

}

