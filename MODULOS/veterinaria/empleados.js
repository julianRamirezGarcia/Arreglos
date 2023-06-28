export function empleadoP() {
  let empleado = "";
  let opcionE = prompt("elija un empleado en numeros 1. Ana  2. Claudio");
  switch (opcionE) {
    case "1":
      console.log("Has seleccionado a ana");
      empleado = "Ana";
      break;
    case "2":
      console.log("has seleccionado a Claudio");
      empleado = "Claudio";
      break;
    default:
      console.log("ingrese una opcion valida");
      return empleadoP();
  }
}

export function empleadoB() {
  let empleado = "";
  let opcionB = prompt(
    "elija un empleado en numeros 1. Milena  2. Rosa  3.Maria"
  );
  switch (opcionB) {
    case "1":
      console.log("Has seleccionado a Milena");
      empleado = "Milena";
      break;
    case "2":
      console.log("has seleccionado a Rosa");
      empleado = "Rosa";
      break;
    case "3":
      console.log("has seleccionado a Maria");
      empleado = "Maria";
      break;
    default:
      console.log("ingrese una opcion valida");
      return empleadoB();
  }
}

export function empleadoV() {
  let empleado = "";
  let opcionV = prompt("elija un empleado en numeros 1. Raul  2. Laura");
  switch (opcionV) {
    case "1":
      console.log("Has seleccionado a Raul");
      empleado = "Raul";
      break;
    case "2":
      console.log("has seleccionado a Laura");
      empleado = "Laura";
      break;

    default:
      console.log("ingrese una opcion valida");
      return empleadoV();
  }
}
