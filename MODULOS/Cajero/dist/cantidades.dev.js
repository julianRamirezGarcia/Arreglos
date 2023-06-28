"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.cantidades = cantidades;
var billete500 = 0;
var billete200 = 0;
var billete100 = 0;
var billete50 = 0;
var billete20 = 0;
var billete5 = 0;
var moneda2 = 0;
var moneda1 = 0;

function cantidades(cant) {
  if (Math.floor(cant / 500) >= 1) {
    billete500 = Math.floor(cant / 500);
    cant = cant % 500;
  }

  if (Math.floor(cant / 200) >= 1) {
    billete200 = Math.floor(cant / 200);
    cant = cant % 200;
  }

  if (Math.floor(cant / 100) >= 1) {
    billete100 = Math.floor(cant / 100);
    cant = cant % 100;
  }

  if (Math.floor(cant / 50) >= 1) {
    billete50 = Math.floor(cant / 50);
    cant = cant % 50;
  }

  if (Math.floor(cant / 20) >= 1) {
    billete20 = Math.floor(cant / 20);
    cant = cant % 20;
  }

  if (Math.floor(cant / 5) >= 1) {
    billete5 = Math.floor(cant / 5);
    cant = cant % 5;
  }

  if (Math.floor(cant / 2) >= 1) {
    moneda2 = Math.floor(cant / 2);
    cant = cant % 50;
  }

  if (Math.floor(cant / 200) >= 1) {
    moneda1 = Math.floor(cant / 1);
    cant = cant % 1;
  }
}
