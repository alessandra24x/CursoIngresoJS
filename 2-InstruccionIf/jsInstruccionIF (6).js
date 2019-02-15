function mostrar()
{
var edad;
var mensaje;
//tomo la edad
edad = parseInt(document.getElementById('edad').value);

if (edad >= 18) {
 mensaje = "usted es mayor de edad";
} else {
    if (edad < 18 && edad >= 13) {
        mensaje = "usted es adolescente";
    } else {
        mensaje = "usted es une niñe";
    }
}
alert (mensaje);

}//FIN DE LA FUNCIÓN