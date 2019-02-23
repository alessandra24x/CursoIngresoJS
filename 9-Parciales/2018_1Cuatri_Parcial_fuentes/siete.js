/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo
			(validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
			</br>a)
			El promedio de las notas totales.
			</br>b)
			La nota más baja y el sexo de esa persona.
			</br>c)
			La cantidad de varones que su nota haya sido mayor o igual a 6.
			</h3>*/

function mostrar() {
	var notas;
	var contador = 0;
	var sexo;
	var mensaje;
	var acumuladorNotas = 0;
	var promedio;


	while(contador < 5) {
		notas = parseInt(prompt("Ingrese su nota"));
		sexo = prompt("ingrese su sexo: f o m");	
		contador = contador + 1;

	if(notas < 0 || notas > 10) {
		notas = prompt("error en el dato ingresado, ingrese nuevamente el dato");
		} else {
			notas = notas + acumuladorNotas;
		}

	if(sexo != "f" && sexo != "m") {
		sexo = prompt("error, ingrese nuevamente el dato");
	}



	}

	promedio = notas/contador;


	alert("el promedio de notas es: " + promedio);












}
