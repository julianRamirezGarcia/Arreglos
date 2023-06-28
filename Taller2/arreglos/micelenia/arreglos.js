let j = [200, -100, 45, 78, 32];
console.log(j[2]);
console.log(j[4]);

let f = ["ab", "cd", "ef", "gh"];
console.log(f[1]);
console.log(f[3]);

const array1 = [10, true, "k200", 20.7];

array1.forEach((element) => console.log(element));

let k = [17, 4, 64, 79, 109, 112];

k.forEach(function (numero) {
  if (numero % 2 != 0) {
    console.log(numero);
  }
});

let h = [true, true, false, true, false];
h[2] = "true";
h[3] = "false";
console.log("Los elementos han sido modificados: ", h);

let w = ["wc", "jp", "zx", "qr"];
w[1] = true;
w[3] = 30;
console.log("Los elementos han sido modificados", w);

function elementos(argumento) {
    for (let index = 0; index < argumento.length; index++) {
        console.log(argumento[index]);
    }
}
let myArreglo = [2, 5, 7, 9]
elementos(myArreglo);

function contarElementos(arreglo) {
  return arreglo.length;
}
let miArreglo = [1, 2, 3, 4, 5];
let cantidadElementos = contarElementos(miArreglo);
console.log(cantidadElementos);  

let arreglo = [30, 44, 54, 89, 100];

let indice44 = arreglo.indexOf(44);
let indice89 = arreglo.indexOf(89);
let indice70 = arreglo.indexOf(70);

console.log("El índice del elemento 44 es: " + indice44);  // Salida: El índice del elemento 44 es: 1
console.log("El índice del elemento 89 es: " + indice89);  // Salida: El índice del elemento 89 es: 3
console.log("El índice del elemento 70 es: " + indice70);  // Salida: El índice del elemento 70 es: -1 (elemento no encontrado)




