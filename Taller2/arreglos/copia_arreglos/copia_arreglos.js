let arregloOriginal = [2, 4, 5];
let arregloCopia = arregloOriginal;
console.log("Copia sin modificar:", arregloCopia);
arregloOriginal.push(50);
console.log("Copia modificando el original:", arregloCopia);
arregloCopia.push(900)
console.log("Original modificando la copia:", arregloOriginal);

//usamos slice para hacer copias independientes de un
//arreglo
let originalDigitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let copiaIndependiente = originalDigitos.slice();
originalDigitos.push(89);
console.log("Copia independiente:", copiaIndependiente);
