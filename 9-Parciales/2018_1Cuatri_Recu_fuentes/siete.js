/*Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales
2-La velocidad más baja y el tipo de combustible de ese vehículo
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros
4-la velocidad más alta de los de combustible sólido*/

function mostrar() {

	var velocidadKm;
	var tipoCombustible;
	var contador;
	var acumulador;
	var promedioVelocidad;
	var velocidadMenor;
	var tipoCombustibleVelocidadBaja;
	var contadorCombustileL_100;
	var velocidadMayor;
	var velocidadMayor_s;

	contador = 0;
	acumulador = 0;
	contadorCombustileL_100 = 0;

	while(contador < 5) {
		velocidadKm = parseInt(prompt("Ingrese la velocidad en Km"));

		while(velocidadKm < 0 || velocidadKm > 250) {
			velocidadKm = parseInt(prompt("error, la velocidad debe estar entre 0 y 250"));
		}

		tipoCombustible = prompt("Ingrese el tipo de combustible");

		while(tipoCombustible != "s" && tipoCombustible != "l") {
			tipoCombustible = prompt("error, el tipo de combustible debe ser s(solido) o l(liquido)");
		}

		if(contador == 0) {
			velocidadMenor = velocidadKm;
			tipoCombustibleVelocidadBaja = tipoCombustible;
			velocidadMayor = velocidadKm;
		} else {
			if(velocidadKm < velocidadMenor) {
				velocidadMenor = velocidadKm;
				tipoCombustibleVelocidadBaja = tipoCombustible;
			}
			if(velocidadKm > velocidadMayor && tipoCombustible == "s") {
				velocidadMayor_s = velocidadKm;
			}
		}

		if(velocidadKm > 100 && tipoCombustible == "l") {
			contadorCombustileL_100++
		}

		acumulador += velocidadKm;

		contador++
	}

	promedioVelocidad = acumulador/contador;

	alert("El promedio de las velocidades totales es: " + promedioVelocidad + 
		" La velocidad mas baja y el tipo de combustible de ese vehiculo es: " + velocidadMenor + " " + tipoCombustibleVelocidadBaja + 
		" La cantidad de combustibles líquidos que su velocidad supera los 100 kilómetros es: " + contadorCombustileL_100 + 
		" La velocidad mas alta de los de combustible solido es: " + velocidadMayor);
}