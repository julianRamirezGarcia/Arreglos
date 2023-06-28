let a = [2, 6, 9, 0, 5];
let copiaDependiente = a.slice();
a.push(100)
console.log(copiaDependiente);
console.log(a);

let b = ["abc", 4, 88, 99];
let copiaDependiente1 = b.slice()
b.push(100)
console.log(copiaDependiente1);
console.log(b);

let recorrer = ["x", "y", "z", 0, 1, 2, 3];
for (let index = 0; index < recorrer.length; index++) {
    let mostrar = [index]
    console.log("Recorriendo la cadena: " + index);
    console.log(mostrar);
}

let recorrer2 = [1, 17, 8, 9, 3];
for (let index = 0; index < recorrer2.length; index++) {
    let resultado = [index]
    console.log("Recorriendo la cadena" + index);
    console.log(resultado);
}

function recorrer5(arreglo, elemento) {
  return arreglo + elemento;
}
let miArreglo = [1, 17, 8, 9, 3];
console.log("Elementos: " + miArreglo.length);

function verificarLetra(letra) {
  const arreglo = ["a", "b", "c", "d", "e", "f", "g"];

  for (let i = 0; i < arreglo.length; i++) {
    if (letra === arreglo[i]) {
      return true;
    }
  }

  return false;
}
console.log(verificarLetra("c"));
console.log(verificarLetra("h"));