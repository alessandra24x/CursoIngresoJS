
function mostrar()
{
	var perro;
	var gato;
	var pesoPerro;
	var pesoGato;
	var sumaPeso;

	perro = "laica";
	gato = "manchis";
	pesoPerro = parseInt(22);
	pesoGato = parseInt(3);

	sumaPeso = pesoPerro + pesoGato;


	alert(´tienes dos mascotas ${perro} y ${gato}, que pesan ${pesoPerro} y ${pesoGato} kilos,
		la suma de los kilos es ${sumaPeso}´);
}