//1

const { test } = require("@jest/globals");

const texto = (texto) => {
    return texto
  }

  module.exports(texto);
  
  //2
  
  const suma = (sumandoA, sumandoB) => {
    return sumandoA + sumandoB;
  }
  module.exports(suma);
  
  //3
  
  const resta = (minuendo, sustraendo) => {
    return minuendo - sustraendo;
  }
  module.exports(resta);
  
  //4
  
  const multiplicacion = (factorA, factorB) => {
    return factorA * factorB;
  }
  module.exports(multiplicación);
  
  //5
  
  const division = (dividendo, divisor) => {
    if  ( divisor === 0)  {
      return 'No se puede dividir por 0';
    } else  {
      return dividendo / divisor;
    }
  }
  module.exports(división);
  
  //6
  
  const tablaMultiplicar = (multiplicando, multiplicador) => {
    if (multiplicador === undefined) return multiplicador = 10;
    for (i = 0; i <= multiplicador; i++)
      return multiplicando + " x", i + " = ", multiplicando * i;
  };
  module.exports(tablaMultiplicar);
  
  //7
  
  const potencia = (base, exponente) => {
    return Math.pow(base, exponente)
  }
  module.exports(potencia);
  
  //8
  
  const anidada = (a,b) => {
    function cuadrado(x) {
      return x * x;
    }
    return cuadrado(a) + cuadrado(b);
  }
  module.exports(anidada);
  
  //9
  
  const cerosIzq = (num, totalLength) => {
    var numStr = num.toString();
    var numCeros = totalLength - numStr.length;
    for (var i = 1; i <= numCeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
  }
  module.exports(cerosIzq);
  
  