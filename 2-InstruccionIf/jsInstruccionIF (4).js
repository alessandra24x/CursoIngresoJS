function mostrar()
{
var edad;
//tomo la edad
edad = parseInt(document.getElementById('edad').value);

if (edad < 18 && edad >= 13) {
    alert ("usted es adolescente");
}

}//FIN DE LA FUNCIÓN