function mostrar()
{

	//var contador = 0;
	var maximo;
	var minimo;
	var numero;
	//var acumulador = 0;
	var respuesta;
	var bandera;

	respuesta = "si";
	bandera = "es la primera";

	while(respuesta == "si") {
		numero = parseInt(prompt("Ingrese un numero"));
		//contador = contador + 1;
		//acumulador = acumulador + numero;

		if(bandera == "es la primera") {
			maximo = numero;
			minimo = numero;
			bandera = "lalala";
		} else {
			if(numero > maximo) {
			maximo = numero;
		}
			if(numero < minimo) {
			minimo = numero;
		}
	}
	respuesta = prompt("=>si, para continuar");
}
document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN