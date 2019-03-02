/*Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.*/

function mostrar() {

	var pais;
	var superficie;
	var respuesta;
	var contador;
	var contadorSuperficieImpar;
	var contadorSuperficieMenor_100;
	var contadorSuperficie_100;
	var primerPaisMayor_100;
	var bandera;
	var acumuladorSuperficie;
	var paisTerritorioMenor;
	var superficieMenor;

	respuesta = "ok";
	contador = 0;
	contadorSuperficieImpar = 0;
	contadorSuperficieMenor_100 = 0;
	contadorSuperficie_100 = 0;
	acumuladorSuperficie = 0;
	bandera = true;

	while(respuesta == "ok") {
		pais = prompt("Ingresar un pais");
		superficie = parseInt(prompt("Ingresar superficie del territorio"));

		while(superficie < 1 || superficie > 10000) {
			superficie = prompt("error, la superficie debe estar entre 1 y 17.100.000");
		}

		if(superficie % 2 == 1) {
			contadorSuperficieImpar++
		}

		if(superficie < 100) {
			contadorSuperficieMenor_100++
		}

		if(superficie == 100) {
			contadorSuperficie_100++
		}

		if(superficie > 100 && bandera) {
			primerPaisMayor_100 = pais;
			bandera = false;
		}

		if(contador == 0) {
			paisTerritorioMenor = pais;
			superficieMenor = superficie;
		} else {
			if(superficieMenor > superficie) {
				paisTerritorioMenor = pais;
				superficieMenor = superficie;
			}
		}

		acumuladorSuperficie += superficie;
		
		contador++
		respuesta = prompt("Ingrese ok para continuar");

	}

	promedioSuperficie = acumuladorSuperficie/contador;

	document.write("La cantidad de paises con superficie impar es: " + contadorSuperficieImpar + "</br>");
	document.write("La cantidad de países con superficie menor a 100 es: " + contadorSuperficieMenor_100 + "</br>");
	document.write("La cantidad de países con superficie igual a 100 es: " + contadorSuperficie_100 + "</br>");
	document.write("El nombre del primer país que superó los 100 de superficie es: " + primerPaisMayor_100 + "</br>");
	document.write("El promedio de kilómetros ingresados es: " + promedioSuperficie + "</br>");
	document.write("El nombre del que menos territorio tiene es: " + paisTerritorioMenor + "</br>");
}