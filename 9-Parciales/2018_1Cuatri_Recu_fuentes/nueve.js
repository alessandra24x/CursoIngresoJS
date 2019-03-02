/*Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la
cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.*/

function mostrar() {

	var marcaGaseosa;
	var cantidadLitros;
	var precio;
	var respuesta;
	var contadorPreciosPares;
	var contador;
	var marcaMenorPrecio;
	var cantidadLitrosMenor;
	var contadorPrecioMenor_50;
	var acumulador;
	var bandera;
	var precioMaximoMenor_3;
	var precioMinimoMenor_3;

	contadorPreciosPares = 0;
	contadorPrecioMenor_50 = 0;
	contador = 0;
	acumulador = 0;
	bandera = true;
	respuesta = "ok";

	while(respuesta == "ok") {
		marcaGaseosa = prompt("Ingrese la marca de la gaseosa");
		cantidadLitros = parseInt(prompt("Ingrese la cantidad de litros"));

		while(cantidadLitros < 1 || cantidadLitros > 3) {
			cantidadLitros = parseInt(prompt("Error, la cantidad de litros debe estar entre 1 y 3"));
		}

		precio = parseInt(prompt("Ingrese el precio"));

		while(precio < 30 || precio > 100) {
			precio = parseInt(prompt("Error, el precio debe estar entre 30 y 100"));
		}

		if(precio % 2 == 0) {
			contadorPreciosPares++
		}

		if(contador == 0) {
			marcaMenorPrecio = marcaGaseosa;
			cantidadLitrosMenor = cantidadLitros;
		} else {
			if(cantidadLitrosMenor > cantidadLitros) {
				marcaMenorPrecio = marcaGaseosa;
				cantidadLitrosMenor = cantidadLitros;
			}
		}

		if(precio < 50) {
			contadorPrecioMenor_50++
		}

		if(cantidadLitros < 3 && bandera) {
			precioMaximoMenor_3 = precio;
			precioMinimoMenor_3 = precio;
			bandera = false;
		} else {
			if(cantidadLitros < 3 && precioMaximoMenor_3 < precio) {
				precioMaximoMenor_3 = precio;
			}
			if(cantidadLitros < 3 && precioMinimoMenor_3 > precio) {
				precioMinimoMenor_3 = precio;
			}
		}

		acumulador += precio;

		contador++
		respuesta = prompt("Ingrese ok para continuar");

	}

	promedio = acumulador/contador

	document.write("La cantidad de precios pares es: " + contadorPreciosPares + "</br>");
	document.write("Datos del mas barato. Marca: " + marcaMenorPrecio + " Cant de litros: " + cantidadLitrosMenor + "</br>");
	document.write("La cantidad de gaseosas que valen menos de 50 es: " + contadorPrecioMenor_50 + "</br>");
	document.write("El promedio del precio de todas las gaseosas es: " + promedio + "</br>");
	document.write("El precio maximo de todas las gaseosas menores de 3 litros es: " + precioMaximoMenor_3 + "</br>");
	document.write("El precio minimo de todas las gaseosas menores de 3 litros es: " + precioMinimoMenor_3 + "</br>");
}