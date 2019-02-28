function mostrar() {
// Defino variables
	var notas;
	var contador = 0;
	var sexo;
	var acumuladorNotas = 0;
	var promedio;
	var notaMasBaja;
	var sexo;
	var contadorVarones6 = 0;

// Bucle
	while(contador < 5) {
		// Entrada de datos
		notas = parseInt(prompt("Ingrese su nota"));

		// Valido la entrada de datos
		while(notas < 0 || notas > 10) {
			notas = parseInt(prompt("error, ingrese una nota válida"));
		}

		// Entrada de datos
		sexo = prompt("ingrese su sexo: f o m");

		// Valido la entrada de datos
		while(sexo != "f" && sexo != "m") {
			sexo = prompt("error, ingrese un sexo válido");
		}

		// Sumo las notas ingresadas
		acumuladorNotas = notas + acumuladorNotas;

		// Aplico lógica: en este caso siempre que el contador sea 0 (1era vez que se ingresa datos), se guarda la nota
		// como nota mas baja y el sexo de la persona.
		if(contador == 0) {
			notaMasBaja = notas;
			notaMasBajaSexo = sexo;
		} else {
			// después de ser el primer dato ingresado aplico lógica para guardar la nota mas baja y el sexo siempre que sea
			// menor a la ingresada ya en la primera vuelta.
			if(notaMasBaja > notas) {
				notaMasBaja = notas;
				notaMasBajaSexo = sexo;
			}
		}
		// aumento el contador del bucle en 1
		contador = contador + 1;

		// aplico lógica para saber cuantos varones tienen nota mayor o igual a 6.
		if(sexo == "m" && notas >= 6) {
				contadorVarones6 = contadorVarones6 + 1;
		}

		}

		// Saco el promedio entre la suma total de las notas y la cantidad de notas ingresadas/.
		promedio = parseInt(acumuladorNotas/contador);

		// Muestro los datos con alert
		alert("el promedio de notas es: " + promedio);
		alert("la nota mas baja es: " + notaMasBaja + " y el sexo de esa persona es: " + notaMasBajaSexo);
		alert("La cantidad de varones con nota mayor o igual a 6 es: " + contadorVarones6);
	}
