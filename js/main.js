
const shop1 = document.getElementById("shop1");
const verCarrito = document.getElementById("verCarrito")
const modalContenedor = document.getElementById("modalContenedor")
const cantidadCarrito = document.getElementById("cantidadCarrito")



const productos = [
  { id: 1, 
      nombre: "Harinas", 
      precio: 50, 
      img: "https://previews.123rf.com/images/lizavetas/lizavetas1606/lizavetas160600098/59026787-ilustraci%C3%B3n-colorida-del-paquete-de-harina-hornear-y-cocinar-los-ingredientes-alimentos-org%C3%A1nicos.jpg",
      cantidad:1, },
  { id: 2,
       nombre: "galletitas", 
       precio: 100, 
       img: "https://http2.mlstatic.com/D_NQ_NP_2X_703585-MLU72699920359_112023-F.webp",
       cantidad:1, },
  { id: 3, 
      nombre: "cerveza", 
      precio: 150, 
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_679881-MLU72628559434_112023-F.webp",
      cantidad:1, },
  { id: 4,
       nombre: "leche", 
       precio: 200, 
       img: " https://http2.mlstatic.com/D_NQ_NP_2X_964754-MLA52169279292_102022-F.webp",
       cantidad:1, },
  { id: 5, 
      nombre: "Fernet", 
      precio: 250, 
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_760966-MLU69953359868_062023-F.webp",
      cantidad:1, },

];

let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((Producto) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${Producto.img}">
  <h3>${Producto.nombre}</h3>
  <p class="price">${Producto.precio}$</p>
  
  `;
  shop1.append(content);
  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);
  comprar.addEventListener("click", () => {
   
   const repeat = carrito.some((repeatProducto)=> repeatProducto.id === Producto.id);
   
if(repeat){
carrito.map((prod)=>{
  if(prod.id === Producto.id){
    prod.cantidad++;
  }

});
}else{
    carrito.push({
      id: Producto.id,
      img: Producto.img,
      nombre: Producto.nombre,
      precio: Producto.precio,
      cantidad: Producto.cantidad,
    });
  }
    console.log(carrito);
    console.log(carrito.length);
    saveLocal();
    carritoContenedor();

  })
});

verCarrito.addEventListener("click", () => {
  modalContenedor.innerHTML = "";
  modalContenedor.style.display = "flex";
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

  modalbutton.addEventListener("click", () => {
    modalContenedor.style.display = "none";
  });

  carrito.forEach((Producto) => {
    let carritoContenedor = document.createElement("div")
    carritoContenedor.className = "modal-contenedor"
    carritoContenedor.innerHTML = `
  <img src="${Producto.img}">
  <h3>${Producto.nombre}</h3>
  <p>${Producto.precio}$</p>


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


