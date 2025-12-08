import { useState } from "react"
import { IoMdHeartEmpty, IoMdHeart, IoMdClose } from "react-icons/io"
import { FiShoppingCart } from "react-icons/fi"

function InfoProducto() {
  const [tipoPasta, setTipoPasta] = useState("blanda") // 'blanda' o 'gruesa'
  const [esFavorito, setEsFavorito] = useState(false)
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false)

  const handleAgregarCarrito = () => {
    setMostrarNotificacion(true)
    setTimeout(() => {
      setMostrarNotificacion(false)
    }, 3000)
  }

  // Datos de ejemplo del producto
  const producto = {
    imagen: "/src/assets/MangaImagen.jpg",
    autor: "Matt Haig",
    titulo: "La biblioteca de la medianoche",
    editorial: "Editorial A4N",
    precioBlanda: 420,
    precioGruesa: 450,
  }

  // Productos relacionados de ejemplo
  const productosRelacionados = [
    {
      id: 1,
      imagen: "/src/assets/MangaImagen.jpg",
      nombre: "Manga: One piece N5",
      tomo: "Tomo numero 5",
      precio: 402,
    },
  ]

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Notificación */}
      {mostrarNotificacion && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3">
          <span>Producto agregado al carrito</span>
          <button onClick={() => setMostrarNotificacion(false)} className="hover:opacity-80">
            <IoMdClose size={20} />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Información del Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Imagen del Producto - 6 columnas */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.titulo}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Información y Botones - 6 columnas */}
          <div className="lg:col-span-6 space-y-6">
            {/* Autor */}
            <div>
              <p className="text-gray-600 text-sm mb-1">Autor</p>
              <p className="text-xl font-medium text-gray-900">{producto.autor}</p>
            </div>

            {/* Título */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{producto.titulo}</h1>
            </div>

            {/* Editorial */}
            <div>
              <p className="text-gray-600 text-sm mb-1">Editorial</p>
              <p className="text-lg text-gray-900">{producto.editorial}</p>
            </div>

            {/* Precio */}
            <div>
              <p className="text-4xl font-bold text-gray-900">
                ${tipoPasta === "blanda" ? producto.precioBlanda : producto.precioGruesa}
              </p>
            </div>

            {/* Tipo de Pasta */}
            <div>
              <p className="text-gray-700 font-medium mb-3">Tipo de pasta:</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setTipoPasta("blanda")}
                  className={`h-11 px-6 rounded-lg font-medium transition-colors ${
                    tipoPasta === "blanda" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Pasta blanda - ${producto.precioBlanda}
                </button>
                <button
                  onClick={() => setTipoPasta("gruesa")}
                  className={`h-11 px-6 rounded-lg font-medium transition-colors ${
                    tipoPasta === "gruesa" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Tapa gruesa - ${producto.precioGruesa}
                </button>
              </div>
            </div>

            {/* Botón Agregar a Favoritos */}
            <div>
              <button
                onClick={() => setEsFavorito(!esFavorito)}
                className="flex items-center gap-2 h-11 px-6 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                {esFavorito ? (
                  <IoMdHeart size={24} className="text-red-500" />
                ) : (
                  <IoMdHeartEmpty size={24} className="text-gray-600" />
                )}
                <span className="font-medium text-gray-700">
                  {esFavorito ? "Eliminar de favoritos" : "Agregar a favoritos"}
                </span>
              </button>
            </div>

            {/* Botones de Compra */}
            <div className="space-y-3 pt-4">
              <button className="w-full h-11 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                Comprar ahora
              </button>
              <button
                onClick={handleAgregarCarrito}
                className="w-full h-11 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <FiShoppingCart size={20} />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card de ejemplo - se replicará con datos de la API */}
            {productosRelacionados.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Botón Favorito */}
                <div className="relative">
                  <button className="absolute top-3 right-3 w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm z-10">
                    <IoMdHeartEmpty size={24} className="text-gray-600" />
                  </button>
                  {/* Imagen */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.imagen || "/placeholder.svg"}
                      alt={item.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Información */}
                <div className="p-4 space-y-1">
                  <h3 className="font-medium text-gray-900 line-clamp-1">{item.nombre}</h3>
                  <p className="text-sm text-gray-600">{item.tomo}</p>
                  <p className="text-lg font-bold text-green-600">${item.precio}</p>
                </div>
              </div>
            ))}

            {/* Espacio para más productos de la API */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px]">
              <p className="text-gray-400 text-center px-4">Más productos se cargarán desde la API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProducto

