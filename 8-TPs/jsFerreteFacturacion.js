var precio1;
var precio2;
var precio3;

function Sumar() {
    precio1 = parseInt(document.getElementById('PrecioUno').value, 10);
    precio2 = parseInt(document.getElementById('PrecioDos').value, 10);
    precio3 = parseInt(document.getElementById('PrecioTres').value, 10);
    var suma = precio1 + precio2 + precio3;
    alert(`La suma es: ${suma}`);
  }
  
  function Promedio() {
    precio1 = parseInt(document.getElementById('PrecioUno').value, 10);
    precio2 = parseInt(document.getElementById('PrecioDos').value, 10);
    precio3 = parseInt(document.getElementById('PrecioTres').value, 10);
    var suma = precio1 + precio2 + precio3;
    var promedio = suma/ 3;
    alert(`El promedio de los productos es: ${promedio}`);
  }
  
  function PrecioFinal(suma) {
    precio1 = parseInt(document.getElementById('PrecioUno').value, 10);
    precio2 = parseInt(document.getElementById('PrecioDos').value, 10);
    precio3 = parseInt(document.getElementById('PrecioTres').value, 10);
    var suma = precio1 + precio2 + precio3;
    var precioFinal = suma * 1.21;
    alert(`El precio final es: ${precioFinal}`);
  }