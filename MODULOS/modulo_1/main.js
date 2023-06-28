import { dato } from "./datos.js";
import { mostrar } from "./mostrar.js";
import {
  ingreso_aseo,
  ingreso_carnes,
  ingreso_grano,
  ingreso_lacteos,
} from "./ingresar.js";
import {
  eliminacion_aseo,
  eliminacion_carnes,
  eliminacion_grano,
  eliminacion_lacteos,
} from "./eliminar.js";

dato();

function salida() {
  console.log(mostrar());
  let opcion1 = parseInt(
    prompt(
      "que desea hacer  \n 1.Ingreso de producto \n 2.eliminacion de producto"
    )
  );
  switch (opcion1) {
    case 1:
      let opcion2 = parseInt(
        prompt(
          "ingrese la categoria del producto \n 1.granos \n 2.aseo \n 3.carnes \n 4.lacteos"
        )
      );
      switch (opcion2) {
        case 1:
          ingreso_grano();
          break;
        case 2:
          ingreso_aseo();
          break;
        case 3:
          ingreso_carnes();
          break;
        case 4:
          ingreso_lacteos();
          break;

        default:
          console.log("ingrese una opcion valida");
          return opcion2;
      }
      break;
    case 2:
      let opcion3 = parseInt(
        prompt(
          "ingrese la categoria del producto 1.granos 2.aseo 3.carnes 4.lacteos"
        )
      );
      switch (opcion3) {
        case 1:
          eliminacion_grano();
          break;
        case 2:
          eliminacion_aseo();
          break;
        case 3:
          eliminacion_carnes();
          break;
        case 4:
          eliminacion_lacteos();
          break;

        default:
          console.log("ingrese una opcion valida");
          break;
      }
      break;
    default:
      console.log("ingrese una opcion valida");
      break;
  }
}

salida();
