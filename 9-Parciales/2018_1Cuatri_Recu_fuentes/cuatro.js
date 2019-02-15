function mostrar()
{

	var cuenta;
	var cantidadAmigos;
	var propina;
	var iva;
	var neto;
	var total;
	var cantidadAPagarPorAmigo;

	cuenta = parseInt(prompt("Ingresa el total de tu cuenta"));
	cantidadAmigos = prompt("Ingresa la cantidad de amigos");
	propina = cuenta * 0.1;
	iva = cuenta * 0.21;
	cantidadAPagarPorAmigo = cuenta / cantidadAmigos;
	neto = cuenta + propina + iva;
	total = neto / cantidadAmigos;

	alert(`el total a pagar por cada uno (sin iva ni propina) es ${cantidadAPagarPorAmigo}, el 10% de propina es
		${propina} y el iva es ${iva}, por lo tanto el total es ${neto} y cada uno debe pagar ${total}`);
}
