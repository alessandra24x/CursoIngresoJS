
function mostrar()
{
	var perro;
	var gato;
	var pesoPerro;
	var pesoGato;
	var sumaPeso;

	perro

	perro = prompt("Por favor ingresa el nombre de tu mascota");
	gato = prompt("Por favor ingresa el nombre de tu mascota");
	pesoPerro = parseInt(22);
	pesoGato = parseInt(3);

	sumaPeso = pesoPerro + pesoGato;


	alert(`tienes dos mascotas ${perro} y ${gato}, que pesan ${pesoPerro} y ${pesoGato} kilos,
		la suma de los kilos es ${sumaPeso}`);
}