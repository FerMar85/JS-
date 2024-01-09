const productos = [
  { nombre: "Harinas", precio: 50 },
  { nombre: "galletitas", precio: 100 },
  { nombre: "cerveza", precio: 150 },
  { nombre: "lecha", precio: 200 },
  { nombre: "Fernet", precio: 250 },

];
let carrito = []

let seleccion = prompt("Hola desea iniciar una compra? si o no")

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingrese si o no")
  seleccion = prompt("Hola desea iniciar una compra? si o no")
}

if (seleccion === "si") {
  alert(" a continuacion nuestros productos en stock")

  //en este punto podemos usar LOG para verlo por consola pero vamos a usar otra opcion para verlo como si fuera en la Pag WEb
  //console.log(productos);

  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
  alert("gracias por visitarnos, lo esperamos pronto!!")
}
while (seleccion != "no") {
  let producto = prompt("agrega un item a tu carrito")
  let precio = 0

  if (producto == "Harinas" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "Fernet") {
    switch (producto) {
      case "Harinas":
        precio = 50;
        break;
      case "galletitas":
        precio = 100;
        break;
      case "cerveza":
        precio = 150;
        break;
      case "leche":
        precio = 200;
        break;
      case "Fernet":
        precio = 250;
        break;
      default:
        break;
    }
  let unidades = parseInt(prompt("cuantas unidades va a elegir"))

  carrito.push({ producto, unidades, precio })
  console.log(carrito);

  } else {
    alert("no tenemos ese producto en stock")
  }

  seleccion = prompt("desea continuar con la compra?")

  while (seleccion === "no") {
    alert("Gracias por su compra!")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, precio: ${carritoFinal.precio}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;

  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total de su compra es: ${total}`)