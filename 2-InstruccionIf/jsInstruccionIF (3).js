function mostrar()
{
var edad;
var mensaje;
	
//tomo la edad  
edad = parseInt(document.getElementById('edad').value);

if (edad >= 18) {
	mensaje = "usted es mayor de edad";
} if (edad < 18) {
	mensaje = "usted es menor de edad";
}
alert (mensaje);
}//FIN DE LA FUNCIÓN