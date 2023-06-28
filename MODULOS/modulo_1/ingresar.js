export function ingreso_grano() {
  let opcion = prompt("ingrese el producto que desea ingresar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas ingresar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, opcion2 + parseInt(granos));
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "actualizado";
}

export function ingreso_aseo() {
  let opcion = prompt("ingrese el producto que desea ingresar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas ingresar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, opcion2 + parseInt(granos));
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "actualizado";
}

export function ingreso_carnes() {
  let opcion = prompt("ingrese el producto que desea ingresar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas ingresar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, opcion2 + parseInt(granos));
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "actualizado";
}

export function ingreso_lacteos() {
  let opcion = prompt("ingrese el producto que desea ingresar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas ingresar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, opcion2 + parseInt(granos));
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "actualizado";
}
