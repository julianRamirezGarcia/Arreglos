let arreglo = [1, 17, 8, 9, 3];
for (let index = 0; index < arreglo.length; index++) {
  console.log(arreglo[index]);
}

function obtenerLongitud(arreglo) {
  return arreglo.length;
}
let miArreglo = [1, 2, 3, 4, 5];
let longitud = obtenerLongitud(miArreglo);
console.log(longitud); // Salida:

function verificarLetra(letra) {
  let arreglo = ["a", "b", "c", "d", "e", "f", "g"];

  for (let i = 0; i < arreglo.length; i++) {
    if (letra === arreglo[i]) {
      return true; // La letra se encuentra en el arreglo
    }
  }

  return false; // La letra no se encuentra en el arreglo
}

let letra1 = "d";
let letra2 = "h";

console.log(verificarLetra(letra1)); // Salida: true
console.log(verificarLetra(letra2)); // Salida: false

let arreglo1 = [3, 50, 70, 600, 40];

arreglo1.forEach(function (elemento) {
  console.log(elemento);
});

let arreglo2 = [3, 50, 70, 600, 40];

arreglo2.forEach(function (elemento) {
  let resultado = elemento * 3;
  console.log(resultado);
});

let array = [3, 50, 70, 600, 40];
let indice = 0;

while (indice < array.length) {
  console.log(arreglo[indice]);
  indice++;
}

let arreglo3 = [3, 50, 70, 600, 40];

for (let i = 0; i < arreglo3.length; i++) {
  if (arreglo[i] % 2 === 0) {
    console.log(arreglo3[i] + " es un número par");
  }
}

let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let encontrado = false;

// Usamos un ciclo for para recorrer cada elemento del arreglo
for (let i = 0; i < nombres.length; i++) {
  // Usamos un condicional para verificar si el nombre actual es "Juan"
  if (nombres[i] === "Juan") {
    encontrado = true;
    break; // Terminamos el ciclo si encontramos el nombre
  }
}

// Verificamos el resultado después del ciclo
if (encontrado) {
  console.log("El nombre Juan se encuentra en el arreglo.");
} else {
  console.log("El nombre Juan no se encuentra en el arreglo.");
}

let nombres1 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

// Usamos un ciclo for para recorrer cada elemento del arreglo
for (let i = 0; i < nombres1.length; i++) {
  // Usamos un condicional para verificar si el nombre actual es "Maria"
  if (nombres[i] === "Maria") {
    contador++; // Incrementamos el contador si encontramos el nombre
  }
}

console.log("El nombre Maria aparece " + contador + " veces en el arreglo.");

let numeros = [15, 7, 9, 12, 1];
let suma = 0;

numeros.forEach(function (numero) {
  suma += numero; // Sumamos cada elemento al contador
});

console.log("La suma de los elementos es: " + suma);

let numeros1 = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

numeros1.forEach(function (numero) {
  sumaCuadrados += numero ** 2; // Sumamos el cuadrado de cada elemento al contador
});

console.log("La suma de los cuadrados de los elementos es: " + sumaCuadrados);

let valores = [true, true, false, true, false, false];
let contador1 = 0;
let i = 0;

while (i < valores.length) {
  if (valores[i] === false) {
    contador++;
  }
  i++;
}

console.log("El valor false aparece " + contador1 + " veces en el arreglo.");

let caracteres = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let esPosible = true;

for (let index = 0; index < palabra.length; i++) {
  if (!caracteres.includes(palabra[i])) {
    esPosible = false;
    break;
  }
}

if (esPosible) {
  console.log(
    "Es posible formar la palabra 'adso' con los elementos del arreglo."
  );
} else {
  console.log(
    "No es posible formar la palabra 'adso' con los elementos del arreglo."
  );
}

for (let i = 10; i <= 20; i++) {
  var resultado = 5 * i;
  console.log("5 x " + i + " = " + resultado);
}

let numeros3 = [5, 7, 90, 2, 5, 3, 8, 99];

numeros3.forEach(function(numeroA) {
  numeros.forEach(function(numeroB) {
    if (numeroA + 1 === numeroB) {
      console.log(numeroA + " y " + numeroB + " son consecutivos.");
    }
  });
});
