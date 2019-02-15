
function mostrar()
{
	var perro;
	var gato;
	var pesoPerro;
	var pesoGato;
	var sumaPeso;

	perro = prompt("Por favor ingresa el nombre de tu mascota");
	gato = prompt("Por favor ingresa el nombre de tu mascota");
	pesoPerro = prompt(`Por favor ingrese el peso de ${perro}`);
	pesoGato = prompt(`Por favor ingrese el peso de ${gato}`);

	sumaPeso = parseInt(pesoPerro) + parseInt(pesoGato);


	alert(`tienes dos mascotas ${perro} y ${gato}, que pesan ${pesoPerro} y ${pesoGato} kilos,
		la suma de los kilos es ${sumaPeso}`);
}