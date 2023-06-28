import { peluqueria, baño, veterinaria } from "./servicio.js";
import { empleadoB, empleadoP, empleadoV } from "./empleados.js";
import { agenda } from "./agenda.js";
function servicio() {
  let opcion = prompt(
    "ingrese una opcion en numeros 1.peluqueria   2.baño     3.veterinaria"
  );

  switch (opcion) {
    case "1":
      peluqueria();
      empleadoP();
      agenda();
      console.log("la fecha es ", date, " de ", valor, " con ", empleado);
      break;
    case "2":
      baño();
      empleadoB();
      agenda();
      console.log("la fecha es ", date, " de ", valor, " con ", empleado);
      break;
    case "3":
      veterinaria();
      empleadoV();
      agenda();
      console.log("la fecha es ", date, " de ", valor, " con ", empleado);
      break;
    default:
      console.log("ingrese una opcon valida");
      return servicio();
  }
}

servicio();
