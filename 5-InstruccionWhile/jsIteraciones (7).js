function mostrar()
{

	var contador = 0;
	var numero;
	var acumulador = 0;
	var respuesta = "si";

	while(respuesta == "si") {
		numero = parseInt(prompt("Ingrese un numero"));
		contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = prompt("=>si, para continuar");

		if(respuesta != "si") {
			break;
		}
	}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN