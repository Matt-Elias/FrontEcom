import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IoMdHeartEmpty, IoMdHeart, IoMdClose } from "react-icons/io"
import { FiShoppingCart } from "react-icons/fi"

// tu api fetch
import { obtenerProducto, obtenerProductos } from "../api/productosApi"

function InfoProducto() {
  const { id } = useParams() // <-- /producto/:id
  const [tipoPasta, setTipoPasta] = useState("blanda")
  const [esFavorito, setEsFavorito] = useState(false)
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false)

  // DATA real
  const [producto, setProducto] = useState(null)
  const [productosRelacionados, setProductosRelacionados] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const handleAgregarCarrito = () => {
    setMostrarNotificacion(true)
    setTimeout(() => setMostrarNotificacion(false), 3000)
  }

  // helper imagen
  const imgUrl = (p) => {
    if (!p?.imagenPng) return "/src/assets/MangaImagen.jpg"
    if (p.imagenPng.startsWith("http")) return p.imagenPng
    return `http://localhost:4000${p.imagenPng}`
  }

  useEffect(() => {
    let alive = true

    const cargar = async () => {
      try {
        setLoading(true)
        setError("")

        console.log("🚀 InfoProducto montado")
        console.log("🆔 id recibido desde URL:", id)

        console.log("📩 Llamando obtenerProducto(id)...")
        const prod = await obtenerProducto(id)
        console.log("✅ Producto recibido:", prod)

        if (!alive) return
        setProducto(prod)

        // (Opcional) relacionados: trae todos y filtra por misma categoriaId
        console.log("📩 Llamando obtenerProductos() para relacionados...")
        const todos = await obtenerProductos()
        console.log("✅ Productos (para relacionados) recibidos:", todos)

        if (!alive) return
        const relacionados = todos
          .filter((p) => p.id !== prod.id)
          .filter((p) => String(p.categoriaId) === String(prod.categoriaId))
          .slice(0, 4)

        console.log("🔗 Relacionados calculados:", relacionados)
        setProductosRelacionados(relacionados)

      } catch (e) {
        console.error("❌ Error consumiendo API en InfoProducto:", e)
        if (!alive) return
        setError(e.message || "Error cargando producto")
      } finally {
        if (!alive) return
        console.log("🏁 Finalizó consumo de InfoProducto (ok o error).")
        setLoading(false)
      }
    }

    cargar()

    return () => {
      alive = false
      console.log("🧹 Cleanup InfoProducto: desmontado.")
    }
  }, [id])

  if (loading) return <div className="p-6">Cargando producto...</div>
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>
  if (!producto) return <div className="p-6">No se encontró el producto.</div>

  // precios: como tu modelo trae solo "precio",
  // aquí hago una adaptación para seguir usando tus 2 botones
  const precioBlanda = Number(producto.precio ?? 0)
  const precioGruesa = Number(producto.precio ?? 0) // si no existe en BD, queda igual

  return (
    <div className="min-h-screen bg-pink-50">
      {mostrarNotificacion && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3">
          <span>Producto agregado al carrito</span>
          <button onClick={() => setMostrarNotificacion(false)} className="hover:opacity-80">
            <IoMdClose size={20} />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Imagen */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img
                src={imgUrl(producto)}
                alt={producto.nombreProducto}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Autor</p>
              <p className="text-xl font-medium text-gray-900">
                {producto.autor || "Sin autor"}
              </p>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {producto.nombreProducto}
              </h1>
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-1">Editorial</p>
              <p className="text-lg text-gray-900">
                {producto.editorial || "Sin editorial"}
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-gray-900">
                ${tipoPasta === "blanda" ? precioBlanda : precioGruesa}
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-3">Tipo de pasta:</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setTipoPasta("blanda")}
                  className={`h-11 px-6 rounded-lg font-medium transition-colors ${
                    tipoPasta === "blanda"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Pasta blanda - ${precioBlanda}
                </button>
                <button
                  onClick={() => setTipoPasta("gruesa")}
                  className={`h-11 px-6 rounded-lg font-medium transition-colors ${
                    tipoPasta === "gruesa"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Tapa gruesa - ${precioGruesa}
                </button>
              </div>
            </div>

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

        {/* Relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosRelacionados.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <button className="absolute top-3 right-3 w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm z-10">
                    <IoMdHeartEmpty size={24} className="text-gray-600" />
                  </button>

                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={imgUrl(item)}
                      alt={item.nombreProducto}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-medium text-gray-900 line-clamp-1">
                    {item.nombreProducto}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.categoria?.nombreCategoria ?? "Sin categoría"}
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    ${Number(item.precio ?? 0).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            {productosRelacionados.length === 0 && (
              <div className="col-span-4 text-gray-500">No hay relacionados.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProducto
