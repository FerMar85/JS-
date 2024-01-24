
// document.getElementById("items").innerHTML = "lista de productos" */
const shop1 = document.getElementById("shop1");
const verCarrito = document.getElementById("verCarrito")
const modalContenedor = document.getElementById("modalContenedor")

// const getProductos = async() =>{
//   const response = await fetch ("productos.json");
//   const productos = await response.json();
//   console.log(productos);
// };
// getProductos();

const productos = [
  { id: 1, nombre: "Harinas", precio: 50, img: "https://previews.123rf.com/images/lizavetas/lizavetas1606/lizavetas160600098/59026787-ilustraci%C3%B3n-colorida-del-paquete-de-harina-hornear-y-cocinar-los-ingredientes-alimentos-org%C3%A1nicos.jpg" },
  { id: 2, nombre: "galletitas", precio: 100, img: "https://http2.mlstatic.com/D_NQ_NP_2X_703585-MLU72699920359_112023-F.webp" },
  { id: 3, nombre: "cerveza", precio: 150, img: "https://http2.mlstatic.com/D_NQ_NP_2X_679881-MLU72628559434_112023-F.webp" },
  { id: 4, nombre: "leche", precio: 200, img: " https://http2.mlstatic.com/D_NQ_NP_2X_964754-MLA52169279292_102022-F.webp" },
  { id: 5, nombre: "Fernet", precio: 250, img: "https://http2.mlstatic.com/D_NQ_NP_2X_760966-MLU69953359868_062023-F.webp" },

];





let carrito = [];
productos.forEach((leon) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${leon.img}">
  <h3>${leon.nombre}</h3>
  <p class="price">${leon.precio}$</p>
  
  `;
  shop1.append(content);
  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);
  comprar.addEventListener("click", () => {
    carrito.push({
      id: leon.id,
      img: leon.img,
      nombre: leon.nombre,
      precio: leon.precio,
    });
    console.log(carrito);
    saveLocal();

  })
});
verCarrito.addEventListener("click", () => {
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-header-titulo">Carrito</h1>

  `;
  modalContenedor.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button"
  modalHeader.append(modalbutton);


  carrito.forEach((productos) => {
    let carritoContenedor = document.createElement("div")
    carritoContenedor.className = "modal-contenedor"
    carritoContenedor.innerHTML = `
  <img src="${productos.img}">
  <h3>${productos.nombre}</h3>
  <p>${productos.precio}$</p>


  `;
    modalContenedor.append(carritoContenedor);

  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-contenedor"
  totalCompra.innerHTML = `total a pagar: ${total} $`;
  modalContenedor.append(totalCompra);
});




//set item
const saveLocal = () => {

  localStorage.setItem("Carrito", JSON.stringify(carrito));
};


//get item










/* const productos = [
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
console.log(`el total de su compra es: ${total}`) */