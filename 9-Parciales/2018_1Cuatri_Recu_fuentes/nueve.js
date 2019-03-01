function mostrar() {

	var marcaCelular;
	var tamanoCelular;
	var precio;
	var mayorPrecio;
	var mayorPrecioMarca;
	var respuesta;
	var contador;
	var precioAcumulado;
	var contadorCelulares_2000;
	var mayorPrecioTamano;
	var menorPrecio;
	var menorPrecioMarca;
	var menorPrecioTamano;
	var marcaCelular_1000;
	var ultimoCelularLg;
	var precioUltimoCelularLg;
	var bandera;

	respuesta = "si";
	contador = 0;
	contadorCelulares_2000 = 0;
	precioAcumulado = 0;
	bandera = false;

	while(respuesta == "si") {
		marcaCelular = prompt("Ingrese la marca del celular");
		tamanoCelular = parseInt(prompt("Ingrese el tamaño del celular"));

		while(tamanoCelular < 0) {
			tamanoCelular = prompt("error, el tamaño debe ser mayor a 0");
		}

		precio = parseInt(prompt("Ingrese el precio"));

		while(precio < 0 || precio > 80000) {
			precio = prompt("error, el precio debe ser menor a 80.000");
		}

		if(contador == 0) {
			mayorPrecio = precio;
			mayorPrecioMarca = marcaCelular;
			mayorPrecioTamano = tamanoCelular;
			menorPrecio = precio;
			menorPrecioMarca = marcaCelular;
			menorPrecioTamano = tamanoCelular;
		} else {
			if(mayorPrecio < precio) {
				mayorPrecio = precio;
				mayorPrecioMarca = marcaCelular;
				mayorPrecioTamano = tamanoCelular;
			}
			if(menorPrecio > precio) {
				menorPrecio = precio;
				menorPrecioMarca = marcaCelular;
				menorPrecioTamano = tamanoCelular;
			}
		}

		if(precio > 2000) {
			contadorCelulares_2000++
		}

		if(precio == 1000 && bandera == false) {
			marcaCelular_1000 = marcaCelular;
			bandera = true;
		}

		if(marcaCelular == "lg") {
			ultimoCelularLg = marcaCelular;
			precioUltimoCelularLg = precio;
		}


		precioAcumulado += precio;
		contador++

		respuesta = prompt("Ingrese si para continuar");

	}

	promedio = precioAcumulado/contador

	document.write("El promedio del precio de los celulares es: " + promedio + "</br>");
	document.write("La cantidad de celulares que valen mas de 2000 es: " + contadorCelulares_2000 + "</br>");
	document.write("Marca, precio y tamaño del celular mas caro es: " + mayorPrecioMarca + " " + mayorPrecio + " " + mayorPrecioTamano + "</br>");
	document.write("Marca, precio y tamaño del celular mas barato es: " + menorPrecioMarca + " " + menorPrecio + " " + menorPrecioTamano + "</br>");
	document.write("El primer celular que vale 1000 es: " + marcaCelular_1000 + "</br>");
	document.write("El precio del ultimo celular lg es: " + precioUltimoCelularLg + "</br>");

}
