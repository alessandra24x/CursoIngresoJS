function mostrar()
{
var descuento;
var aumento;
var resultado;
var suma;
var numeroUno;
var numeroDos;
var numeroTres;
var numeroCuatro;
var mensaje;
var numeroMaximo;

	numeroUno = prompt("Por favor ingresa un numero");
	numeroDos = prompt("Por favor ingresa Por favor ingresa un segundo numero");
	numeroTres = prompt("Por favor ingresa un tercer numero");
	numeroCuatro = prompt("Por favor ingresa un cuarto numero");

	suma = parseInt(numeroUno) + parseInt(numeroDos) + parseInt(numeroTres) + parseInt(numeroCuatro);

	if(suma > 100) {
		descuento = suma * 0.1;
		resultado = suma - descuento;
		mensaje = resultado;
	} else {
		if(suma > 50) {
			descuento = suma * 0.05;
			resultado = suma - descuento;
			mensaje = resultado;
		} else {
			aumento = suma * 0.15;
			resultado = suma + aumento;
			mensaje = resultado;
		}
	}

	if(numeroUno > numeroDos && numeroUno > numeroTres && numeroUno > numeroCuatro) {
		numeroMaximo = numeroUno;
	} else {
		if(numeroDos > numeroTres && numeroDos > numeroCuatro) {
			numeroMaximo = numeroDos;
		} else {
			if(numeroTres > numeroCuatro) {
				numeroMaximo = numeroTres;
			} else {
				numeroMaximo = numeroCuatro;
			}
		}
	}

	alert(`Su total es ${mensaje}, el numero mayor ingresado es ${numeroMaximo}`);
}

