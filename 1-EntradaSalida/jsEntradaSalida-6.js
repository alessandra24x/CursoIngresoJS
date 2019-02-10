/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var num1 = numeroUno.value;
  var num2 = numeroDos.value;
  var suma = parseInt(num1) + parseInt(num2);
  alert(`la suma es: ${suma}`);
}

