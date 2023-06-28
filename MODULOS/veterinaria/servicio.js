export function peluqueria() {
  let valor = "";
  let opcionP = prompt("seleccione una 1. perros $30.000 2. gatos $40.000");
  switch (opcionP) {
    case "1":
      console.log("has seleccionado la peluqueria de perros");
      valor = "peluqueria, perros de un precio de $30.000";
      break;
    case "2":
      console.log("has seleccionado la peluqueria de gatos");
      valor = "peluqueria, gatos con un precio de  $40.000";
      break;
    default:
      console.log("ingrese una opcion valida");
      return peluqueria();
  }
}
export function baño() {
  let valor = "";
  let opcionB = prompt("seleccione una 1. perros $35.000 2. gatos $25.000");
  switch (opcionB) {
    case "1":
      console.log("has seleccionado el baño de perros");
      valor = " baños, perros con un precio de  $35.000";
      break;
    case "2":
      console.log("has seleccionado el baño de gatos");
      valor = " baños, gatos conun precio de $25.000";
      break;
    default:
      console.log("ingrese una opcion valida");
      return baño();
  }
}

export function veterinaria() {
  let valor = "";
  let opcionV = prompt(
    "seleccione una 1.consultas $30.000 2. esterilizacion $120.000"
  );
  switch (opcionV) {
    case "1":
      console.log("has seleccionado la veterinaria de consultas");
      valor = "veterinaria, consultas con un precio de $30.000";
      break;
    case "2":
      console.log("has seleccionado la veterinaria con esterilizacion");
      valor = "veterinaria, esterilizacion con un precio de $120.000";
      break;
    default:
      console.log("ingrese una opcion valida");
      return veterinaria();
  }
}
