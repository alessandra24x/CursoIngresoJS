function mostrar()
{
var edad;
var estadoCivil;
var value;
//tomo la edad
edad = parseInt(document.getElementById('edad').value);
estadoCivil = document.getElementById('estadoCivil');
value = estadoCivil[estadoCivil.selectedIndex].value;

if (edad < 18 && value != "Soltero") {
 alert ("Es muy pequeño para NO ser soltero");
} 

}//FIN DE LA FUNCIÓN