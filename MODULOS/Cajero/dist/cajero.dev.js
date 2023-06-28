"use strict";

var _mensaje = require("./mensaje.js");

var _cantidades = require("./cantidades.js");

function main() {
  var cant = (0, _mensaje.pedirString)("Ingrese la cantidad a desglosar");
  var cantidad = (0, _cantidades.cantidades)(cant);
  console.log(
    "Cantidad de billetes:\n    de 500 "
      .concat(billete500, " \n    de 200 ")
      .concat(billete200, "\n    de 100 ")
      .concat(billete100, "\n    de 50 ")
      .concat(billete50, "\n    de 20 ")
      .concat(billete20, "\n    de 5 ")
      .concat(billete5, "\n    Cantidad de monedas: de\n    de 2 ")
      .concat(moneda2, "\n    de 1 ")
      .concat(moneda1)
  );
}

main();
