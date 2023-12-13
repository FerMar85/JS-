// simulador de datos (pedido de datos)


var password = prompt("Ingrese la contraseña");

if (password !== null) {
  // se ejecuta cuando no se haya dado a "Cancelar"
 } while (password !== "hola") {
    password = prompt("La contraseña es incorrecta, inténtelo una vez más");
  }

  alert("Contraseña correcta");