function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var acumulador;
	
	var respuesta='si';

	while(1) {
		numero = parseInt(prompt("Ingrese un numero"));
		contador = contador + 1;

		respuesta = prompt("=>si, para continuar");

		if(numero > 0) {
			positivo = positivo + numero;
		} else {
			negativo = negativo * numero;
		}

		if(respuesta != "si") {
			break;
		}
	}


document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN