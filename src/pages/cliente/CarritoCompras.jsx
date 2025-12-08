import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"
import { IoCloseOutline } from "react-icons/io5"

function CarritoCompras() {
  // Estado para los productos en el carrito
  const [productosCarrito, setProductosCarrito] = useState([
    {
      id: 1,
      nombre: "Manga: One piece N5",
      tomo: "Tomo numero 5",
      precio: 402,
      cantidad: 2,
      imagen: "/src/assets/MangaImagen.jpg",
    },
    {
      id: 2,
      nombre: "Manga: Death note",
      tomo: "Tomo numero 3",
      precio: 402,
      cantidad: 1,
      imagen: "/src/assets/MangaImagen.jpg",
    },
    {
      id: 3,
      nombre: "Manga: Dragon ball",
      tomo: "Tomo numero 1",
      precio: 402,
      cantidad: 1,
      imagen: "/src/assets/MangaImagen.jpg",
    },
  ])

  // Aumentar cantidad
  const incrementarCantidad = (id) => {
    setProductosCarrito(
      productosCarrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto,
      ),
    )
  }

  // Disminuir cantidad
  const decrementarCantidad = (id) => {
    setProductosCarrito(
      productosCarrito.map((producto) =>
        producto.id === id && producto.cantidad > 1 ? { ...producto, cantidad: producto.cantidad - 1 } : producto,
      ),
    )
  }

  // Eliminar producto
  const eliminarProducto = (id) => {
    setProductosCarrito(productosCarrito.filter((producto) => producto.id !== id))
  }

  // Calcular totales
  const calcularSubtotal = () => {
    return productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
  }

  const subtotal = calcularSubtotal()
  const envio = 0
  const impuestos = 0
  const cuponDescuento = 0
  const total = subtotal + envio + impuestos - cuponDescuento
  const cantidadProductos = productosCarrito.reduce((total, producto) => total + producto.cantidad, 0)

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Contenedor principal con sistema de 12 columnas */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          {/* Sección izquierda - Lista de productos (8 columnas) */}
          <div className="col-span-12 lg:col-span-8">
            {/* Encabezado de la tabla */}
            <div className="bg-[#FF7F50] text-white font-semibold px-4 py-3 rounded-t-lg grid grid-cols-12 gap-4">
              <div className="col-span-5">Producto</div>
              <div className="col-span-2 text-center">Precio</div>
              <div className="col-span-3 text-center">Cantidad</div>
              <div className="col-span-2 text-right">Sub-total</div>
            </div>

            {/* Lista de productos */}
            <div className="space-y-4 mt-4">
              {productosCarrito.map((producto) => (
                <div key={producto.id} className="bg-pink-100 border-2 border-pink-200 rounded-lg p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Botón eliminar + Imagen + Info del producto (5 columnas) */}
                    <div className="col-span-12 sm:col-span-5 flex items-center gap-3">
                      {/* Botón eliminar */}
                      <button
                        onClick={() => eliminarProducto(producto.id)}
                        className="w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded hover:bg-gray-100 flex-shrink-0"
                        aria-label="Eliminar producto"
                      >
                        <IoCloseOutline className="w-6 h-6" />
                      </button>

                      {/* Imagen del producto */}
                      <img
                        src={producto.imagen || "/placeholder.svg"}
                        alt={producto.nombre}
                        className="w-16 h-20 object-cover rounded flex-shrink-0"
                      />

                      {/* Información del producto */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{producto.nombre}</p>
                        <p className="text-xs text-gray-600">{producto.tomo}</p>
                      </div>
                    </div>

                    {/* Precio (2 columnas) */}
                    <div className="col-span-4 sm:col-span-2 text-center">
                      <p className="font-semibold">${producto.precio}</p>
                    </div>

                    {/* Controles de cantidad (3 columnas) */}
                    <div className="col-span-4 sm:col-span-3 flex items-center justify-center gap-2">
                      {/* Botón menos */}
                      <button
                        onClick={() => decrementarCantidad(producto.id)}
                        disabled={producto.cantidad === 1}
                        className={`w-11 h-11 flex items-center justify-center border-2 border-black rounded ${
                          producto.cantidad === 1
                            ? "bg-gray-300 cursor-not-allowed opacity-50"
                            : "bg-white hover:bg-gray-100"
                        }`}
                        aria-label="Disminuir cantidad"
                      >
                        <FiMinus className="w-5 h-5" />
                      </button>

                      {/* Cantidad */}
                      <span className="w-12 h-11 flex items-center justify-center bg-white border-2 border-black rounded font-semibold">
                        {producto.cantidad}
                      </span>

                      {/* Botón más */}
                      <button
                        onClick={() => incrementarCantidad(producto.id)}
                        className="w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded hover:bg-gray-100"
                        aria-label="Aumentar cantidad"
                      >
                        <FiPlus className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Sub-total (2 columnas) */}
                    <div className="col-span-4 sm:col-span-2 text-right">
                      <p className="font-semibold">${producto.precio * producto.cantidad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección derecha - Resumen de orden (4 columnas) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pink-100 border-2 border-pink-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6">Orden total</h2>

              {/* Detalles del resumen */}
              <div className="space-y-4">
                {/* Productos */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Productos</span>
                  <span className="font-semibold">{cantidadProductos}</span>
                </div>

                {/* Sub Total */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sub Total</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>

                {/* Envío */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Envío</span>
                  <span className="font-semibold">${envio}</span>
                </div>

                {/* Impuestos */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Impuestos</span>
                  <span className="font-semibold">${impuestos}</span>
                </div>

                {/* Cupón de descuento */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cupón de descuento</span>
                  <span className="font-semibold">${cuponDescuento}</span>
                </div>

                {/* Línea divisoria */}
                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">${total}</span>
                  </div>
                </div>
              </div>

              {/* Botón Realizar pago */}
              <button className="w-full h-11 bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold rounded mt-6 transition-colors">
                Realizar pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarritoCompras;
