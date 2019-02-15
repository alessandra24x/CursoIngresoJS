function mostrar()
{
	var nota;
	var mensaje;
	nota = (Math.floor(Math.random() * (10 - 1)) + 1);
	//Genero el número RANDOM entre 1 y 10 
	if (nota >= 9) {
		mensaje = `EXCELENTE, nota: ${nota}`;
	} else if (nota > 4) {
		mensaje = `APROBÓ, nota: ${nota}`;
	} else if (nota < 4) {
		mensaje = `Vamos, la próxima se puede, nota: ${nota}`;
	}
	alert (mensaje)
}//FIN DE LA FUNCIÓN