// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de números pares.
// b) La cantidad de números impares.
// c) La cantidad de ceros.
// d) El promedio de todos los números positivos ingresados.
// e) La suma de todos los números negativos.
// f) El número y la letra del máximo y el mínimo.

function mostrar() {
  var letra;
  var numero;
  var respuesta;
  var contadorPares;
  var contadorImpares;
  var contadorCeros;
  var numerosPositivos;
  var numerosNegativos;
  var contadorPositivos;
  var promedioNumerosPositivos;
  var banderaNum;
  var banderaLet;
  var numeroMax;
  var numeroMin;
  var letraMax;
  var letraMin;

  respuesta = "si";
  contadorPares = 0;
  contadorImpares = 0;
  contadorCeros = 0;
  contadorPositivos = 0;
  numerosNegativos = 0;
  numerosPositivos = 0;
  banderaNum = true;
  banderaLet = true;

  while(respuesta == "si") {

    letra = prompt("Ingrese una letra").toUpperCase();
    numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
    while(numero <-100 || numero > 100) {
      numero = parseInt(prompt("error, ingrese un numero entre -100 y 100"));
    }

    if(numero == 0) {
      contadorCeros = contadorCeros + 1;
    } else if(numero % 2 == 0 && numero != 0) {
      contadorPares = contadorPares + 1;
    } else {
      contadorImpares = contadorImpares + 1;
    }

    if(numero > 0) {
      numerosPositivos = numerosPositivos + numero;
      contadorPositivos = contadorPositivos + 1;
    } else {
      numerosNegativos = numerosNegativos + numero;
    }

    if(banderaNum) {
			numeroMax = numero;
			numeroMin = numero;
			banderaNum = false;
		} else {
      if(numero > numeroMax) {
        numeroMax = numero;
      }
      if(numero < numeroMin) {
        numeroMin = numero;
      }
    }

    if(banderaLet) {
			letraMax = letra;
			letraMin = letra;
			banderaLet = false;
		} else {
      if(letra > letraMax) {
        letraMax = letra;
      }
      if(letra < letraMin) {
        letraMin = letra;
      }
    }

    respuesta = prompt("=>si, para continuar");
  }
  promedioNumerosPositivos = numerosPositivos/contadorPositivos

  document.write("La cantidad de numeros pares es: " + contadorPares + "</br>");
  document.write("La cantidad de numeros impares es: " + contadorImpares + "</br>");
  document.write("La cantidad de ceros es: " + contadorCeros + "</br>");
  document.write("El promedio de los numeros positivos es: " + promedioNumerosPositivos + "</br>");
  document.write("La suma de los numeros negativos es: " + numerosNegativos + "</br>");
  document.write("El numero maximo es: " + numeroMax + "</br>");
  document.write("El numero minimo es: " + numeroMin + "</br>");
  document.write("La letra maxima es: " + letraMax + "</br>");
  document.write("La letra minima es: " + letraMin + "</br>");
}
