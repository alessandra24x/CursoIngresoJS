function mostrar()
{
  	var articulo;
	var artiulo2;
	var precio;
	var precio2;
	var descuento;
	var neto;
	var iva;
	var total;
	
	articulo = prompt("Por favor ingresa que deseas comprar");
	artiulo2 = prompt("Por favor ingresa el segundo articulo que deseas comprar");
	precio = 1500;
	precio2 = 2500;

	sumaArticulos = parseInt(precio) + parseInt(precio2);
	descuento = sumaArticulos * 0.1;
	neto = sumaArticulos - descuento
	iva = neto * 0.21;
	total = neto + iva;



	alert(`tu compra es de ${sumaArticulos} tenes un descuento del 10% queda en
		${neto}, mas el iva es ${total}`);
}


