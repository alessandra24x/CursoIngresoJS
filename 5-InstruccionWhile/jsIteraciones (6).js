
function mostrar()
{
	var numero;
	var contador = 0;
	var acumulador = 0;

	while(contador < 5) {
    numero = parseInt(prompt(`Ingrese su ${contador + 1} numero`));
		contador = contador + 1;
		acumulador = acumulador + numero;
	}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN