/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos.
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos.
8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function mostrar()
{

	var numero;
	var respuesta;
	var negativos = 0;
	var positivos = 0;
	var contadorNegativo = 0;
	var contadorPositivo = 0;
	var contadorCero = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var DIFERENCIA;
	//declarar contadores y variables

	ceros = 0;
	respuesta = "si";

	while(respuesta != "no")
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero < 0) {
			contadorNegativo = contadorNegativo + 1;
			negativos = negativos + numero;
		} else {
			if(numero > 0) {
				positivos = positivos + numero;
				contadorPositivo = contadorPositivo + 1;
			} else {
				contadorCero = contadorCero + 1;
			}
}
			if(numero % 2 == 0) {
				contadorPares = contadorPares + 1;
			}

		respuesta = prompt("=>si, para continuar");

	}

	promedioPositivos = positivos/contadorPositivo;
	promedioNegativos = negativos/contadorNegativo;
	DIFERENCIA = positivos - negativos;

	document.write("La suma de los negativos es: " + negativos + "</br>");
	document.write("La suma de los positivos es: " + positivos + "</br>");
	document.write("La cantidad de positivos es: " + contadorPositivo + "</br>");
	document.write("La cantidad de negativos es: " + contadorNegativo + "</br>");
	document.write("La cantidad de ceros es: " + contadorNegativo + "</br>");
	document.write("La cantidad de numeros pares es: " + contadorPares + "</br>");
	document.write("El promedio de los positivos es: " + promedioPositivos + "</br>");
	document.write("El promedio de los negativos es: " + promedioNegativos + "</br>");
	document.write("La diferencia entre positivos y negativos es: " + DIFERENCIA + "</br>");









}//FIN DE LA FUNCIÓN