export function eliminacion_grano() {
  let opcion = prompt("ingrese el producto que desea eliminar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas eliminar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, parseInt(granos) - opcion2);
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "eliminado";
}

export function eliminacion_aseo() {
  let opcion = prompt("ingrese el producto que desea ingresar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas eliminar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, parseInt(granos) - opcion2);
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "eliminado";
}

export function eliminacion_carnes() {
  let opcion = prompt("ingrese el producto que desea eliminar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas eliminar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, parseInt(granos) - opcion2);
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "eliminado";
}

export function eliminacion_lacteos() {
  let opcion = prompt("ingrese el producto que desea eliminar");
  let opcion2 = parseInt(
    prompt("ingrese la cantidad de productos que deseas eliminar")
  );
  let granos = localStorage.getItem(opcion);
  localStorage.setItem(opcion, parseInt(granos) - opcion2);
  let mensaje = ` ${opcion} ${localStorage.getItem(opcion)}`;
  console.log(mensaje);
  return "eliminado";
}
