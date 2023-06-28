let arr1 = [1, 2, 3, 4, 5, 6];
let i = 0;

while (i < arr1.length) {
  console.log(arr1[i]);
  i++;
}

let arr2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

let arr3 = [1, 2, 3, 4, 5, 6];
let new_arr = [];

for (let i = 0; i < arr3.length; i++) {
  new_arr.push(arr3[i] + 1);
}

console.log(new_arr);

let arr4 = [1, 2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < arr4.length; i++) {
  total += arr4[i];
}

let promedio = total / arr4.length;
console.log(promedio);

function obtenerCadenasDeUnaBase(arr) {
  let bases = ["A", "T", "C", "G"];
  let cadenasUnaBase = [];

  // Iterar por cada base
  for (let i = 0; i < bases.length; i++) {
    let base = bases[i];
    let esCadenaUnaBase = true;

    // Verificar si todas las cadenas contienen solo la base actual
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].indexOf(base) === -1) {
        esCadenaUnaBase = false;
        break;
      }
    }

    // Si todas las cadenas contienen solo la base actual, agregarla al resultado
    if (esCadenaUnaBase) {
      cadenasUnaBase.push(base.repeat(arr.length));
    }
  }

  // Mostrar las cadenas de una sola base
  for (let i = 0; i < cadenasUnaBase.length; i++) {
    console.log(cadenasUnaBase[i]);
  }
}

// Ejemplo de uso
let adnArr = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
obtenerCadenasDeUnaBase(adnArr);

function encontrarNumeroMenor(arr) {
  if (arr.length === 0) {
    return null; // Si el arreglo está vacío, retorna null
  }

  let menor = arr[0]; // Asignamos el primer elemento del arreglo como el valor inicial

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i]; // Si encontramos un número menor, actualizamos la variable "menor"
    }
  }

  return menor;
}

// Ejemplo de uso
let numeros1 = [5, 2, 8, 1, 10];
let menorNumero = encontrarNumeroMenor(numeros1);
console.log("El número menor es:", menorNumero);

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function mostrarNumerosPrimos(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (esPrimo(arr[i])) {
      console.log(arr[i]);
    }
  }
}

// Ejemplo de uso
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Números primos:");
mostrarNumerosPrimos(numeros);

function obtenerUsuariosMayoresDeEdad(n) {
  let usuariosMayores = [];
  let contadorMayores = 0;

  for (let i = 0; i < n; i++) {
    let nombre = prompt(`Ingrese el nombre del usuario ${i + 1}:`);
    let edad = parseInt(prompt(`Ingrese la edad del usuario ${i + 1}:`));

    if (edad >= 18) {
      usuariosMayores.push(nombre);
      contadorMayores++;
    }
  }

  console.log("Usuarios mayores de edad:");
  usuariosMayores.forEach((usuario) => {
    console.log(usuario);
  });

  console.log("Total de usuarios mayores de edad:", contadorMayores);

  return usuariosMayores;
}

// Ejemplo de uso
let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios:"));
obtenerUsuariosMayoresDeEdad(cantidadUsuarios);

let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

let valleOrdenado = [];
let quindioOrdenado = [];

for (let i = 0; i < valle.length; i++) {
  if (
    valle[i] === "Cali" ||
    valle[i] === "Tulua" ||
    valle[i] === "Cartago" ||
    valle[i] === "Salento"
  ) {
    valleOrdenado.push(valle[i]);
  }
}

for (let i = 0; i < quindio.length; i++) {
  if (
    quindio[i] === "Cordoba" ||
    quindio[i] === "Armenia" ||
    quindio[i] === "Palmira" ||
    quindio[i] === "Circasia"
  ) {
    quindioOrdenado.push(quindio[i]);
  }
}

console.log("Valle ordenado:", valleOrdenado);
console.log("Quindio ordenado:", quindioOrdenado);

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
  if (
    arreglo1[i] === "Pera" ||
    arreglo1[i] === "Limón" ||
    arreglo1[i] === "Manzana" ||
    arreglo1[i] === "Banano"
  ) {
    frutas.push(arreglo1[i]);
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  if (
    arreglo2[i] === "Cebolla" ||
    arreglo2[i] === "Pimentón" ||
    arreglo2[i] === "Lechuga" ||
    arreglo2[i] === "Perejíl"
  ) {
    verduras.push(arreglo2[i]);
  }
}

console.log("Frutas ordenadas:", frutas);
console.log("Verduras ordenadas:", verduras);

function obtenerNumeroMayor() {
  let arreglo = prompt(
    "Ingrese el arreglo de números enteros separados por comas:"
  )
    .split(",")
    .map(Number);

  if (arreglo.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  let numeroMayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMayor) {
      numeroMayor = arreglo[i];
    }
  }

  console.log("El número mayor es:", numeroMayor);
  return numeroMayor;
}

// Ejemplo de uso
obtenerNumeroMayor();

function compararPromedios() {
  let arreglo1 = prompt(
    "Ingrese el primer arreglo de números enteros separados por comas:"
  )
    .split(",")
    .map(Number);
  let arreglo2 = prompt(
    "Ingrese el segundo arreglo de números enteros separados por comas:"
  )
    .split(",")
    .map(Number);

  if (arreglo1.length === 0 || arreglo2.length === 0) {
    console.log("Al menos uno de los arreglos está vacío.");
    return null;
  }

  let promedio1 = calcularPromedio(arreglo1);
  let promedio2 = calcularPromedio(arreglo2);

  console.log("Promedio del arreglo 1:", promedio1);
  console.log("Promedio del arreglo 2:", promedio2);

  if (promedio1 > promedio2) {
    console.log("El arreglo 1 tiene un promedio mayor.");
    return arreglo1;
  } else if (promedio2 > promedio1) {
    console.log("El arreglo 2 tiene un promedio mayor.");
    return arreglo2;
  } else {
    console.log("Ambos arreglos tienen el mismo promedio.");
    return null;
  }
}

function calcularPromedio(arreglo) {
  let suma = arreglo.reduce((total, num) => total + num, 0);
  return suma / arreglo.length;
}

// Ejemplo de uso
compararPromedios();

function verificarLetraC() {
  let arregloNombres = prompt(
    "Ingrese el arreglo de nombres separados por comas:"
  ).split(",");

  if (arregloNombres.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  let cantidadApariciones = 0;

  arregloNombres.forEach(function (nombre) {
    let cantidad = contarAparicionesLetraC(nombre);
    cantidadApariciones += cantidad;
  });

  if (cantidadApariciones > 0) {
    console.log(`La letra "c" se encuentra en los nombres.`);
    console.log(
      `Cantidad de veces que aparece la letra "c": ${cantidadApariciones}`
    );
  } else {
    console.log(`La letra "c" no se encuentra en los nombres.`);
  }

  return cantidadApariciones;
}

function contarAparicionesLetraC(nombre) {
  let contador = 0;
  let nombreMinusculas = nombre.toLowerCase();

  for (let i = 0; i < nombreMinusculas.length; i++) {
    if (nombreMinusculas[i] === "c") {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso
verificarLetraC();

function contarNumerosImpares() {
  let arreglo = prompt(
    "Ingrese el arreglo de números enteros positivos separados por comas:"
  )
    .split(",")
    .map(Number);

  if (arreglo.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  let contadorImpares = 0;

  arreglo.forEach(function (numero) {
    if (numero % 2 !== 0) {
      contadorImpares++;
    }
  });

  console.log("Cantidad de números impares:", contadorImpares);
  return contadorImpares;
}

// Ejemplo de uso
contarNumerosImpares();

function encontrarCadenaMayorTimina() {
  let arregloADN = prompt(
    "Ingrese el arreglo de cadenas de ADN separadas por comas:"
  ).split(",");

  if (arregloADN.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  let cadenaMayorTimina = "";
  let mayorCantidadTimina = 0;

  arregloADN.forEach(function (cadena) {
    let cantidadTimina = contarTimina(cadena);

    if (cantidadTimina > mayorCantidadTimina) {
      mayorCantidadTimina = cantidadTimina;
      cadenaMayorTimina = cadena;
    }
  });

  if (mayorCantidadTimina > 0) {
    console.log(
      "Cadena de ADN con mayor número de Timina (T):",
      cadenaMayorTimina
    );
    console.log("Cantidad de Timina (T) en la cadena:", mayorCantidadTimina);
  } else {
    console.log("No se encontró ninguna cadena con Timina (T).");
  }

  return cadenaMayorTimina;
}

function contarTimina(cadena) {
  let cantidadTimina = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "T") {
      cantidadTimina++;
    }
  }

  return cantidadTimina;
}

// Ejemplo de uso
encontrarCadenaMayorTimina();

function ordenarArreglo() {
  let arreglo = prompt(
    "Ingrese el arreglo de números enteros no repetidos separados por comas:"
  )
    .split(",")
    .map(Number);

  if (arreglo.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  arreglo.sort(function (a, b) {
    return a - b;
  });

  console.log("Arreglo ordenado:", arreglo);
  return arreglo;
}

// Ejemplo de uso
ordenarArreglo();

function ordenarArreglo() {
  let arreglo = prompt(
    "Ingrese el arreglo de letras no repetidas separadas por comas:"
  ).split(",");

  if (arreglo.length === 0) {
    console.log("El arreglo está vacío.");
    return null;
  }

  arreglo.sort();

  console.log("Arreglo ordenado:", arreglo);
  return arreglo;
}

// Ejemplo de uso
ordenarArreglo();
