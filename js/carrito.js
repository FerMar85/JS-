
const pintarCarrito= () =>{
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
    <p>cantidad:${Producto.cantidad}</p>
    <p>Total: ${Producto.cantidad * Producto.precio}</p>
  
  
    `;
      modalContenedor.append(carritoContenedor);
      let eliminar = document.createElement("span")
      eliminar.innerText = "❌";
      eliminar.className = "Eliminar-Producto";
      carritoContenedor.append(eliminar);
      eliminar.addEventListener("click", eliminarProducto);
    });
  
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenedor"
    totalCompra.innerHTML = `total a pagar: ${total} $`;
    modalContenedor.append(totalCompra);
  };
  verCarrito.addEventListener("click", pintarCarrito);
  const eliminarProducto = () => {
    const foundId = carrito.find((Element)=> Element.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;

    });
    carritoContenedor();
    
    pintarCarrito();
  };
  const carritoContenedor = ()=> {
    cantidadCarrito.style.display="block";
    cantidadCarrito.innerText = carrito.length;
  }