import { pedirString } from "./mensaje.js";
import { cantidades } from "./cantidades.js";

function main() {
  let cant = pedirString("Ingrese la cantidad a desglosar");
  let cantidad = cantidades(cant);

  console.log(`Cantidad de billetes:
    de 500 ${billete500} 
    de 200 ${billete200}
    de 100 ${billete100}
    de 50 ${billete50}
    de 20 ${billete20}
    de 5 ${billete5}
    Cantidad de monedas: de
    de 2 ${moneda2}
    de 1 ${moneda1}`);
}
main();
