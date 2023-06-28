let agregar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
agregar.push(345, true, "ADSO", 445, 78, false, "ABcd", true, 21);
console.log(agregar);


let eliminar = [1, 2, false];
eliminar.splice(2, 1)
console.log(eliminar);

let eliminar1 = [99, false, 17, 45, 7, "abc", 78];
eliminar1.splice(6, 1);
console.log(eliminar1);

let eliminar2 = [-1, -55, -89- 30, 1000];
eliminar2.splice(1, 1);
console.log(eliminar2);

let eliminar3 = ["zxc", 767, 1298, true, false, [3], 1];
eliminar3.splice(1, 4);
console.log(eliminar3);

let eliminar4 = [34, ["q"], 67, 1, 99, 1/2];
eliminar4.splice(3, 2);
console.log(eliminar4);

let a = [2, 6, 9, 0, 5];
let copiaA = a.slice();

console.log(copiaA);  // Salida: [2, 6, 9, 0, 5]

let b = ["abc", 4, 88, 99];
let copiaB = b.slice();

console.log(copiaB);

let recorrer = ["x", "y", "z", 0, 1, 2, 3];
for (let index = 0; index < recorrer.length; index++) {
    console.log(recorrer[index]);
}