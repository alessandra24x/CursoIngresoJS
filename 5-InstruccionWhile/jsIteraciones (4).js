function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero < 0 || numero > 10) {
		numero = prompt("error, ingrese el número.");
	}

	document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN