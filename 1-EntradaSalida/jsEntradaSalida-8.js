/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var numDividendo = parseInt(numeroDividendo.value);
  var numDivisor = parseInt(numeroDivisor.value);
  var division = numDividendo % numDivisor;
  alert(`El resto es ${division}`);
}
