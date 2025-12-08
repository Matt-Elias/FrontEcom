import { useState } from "react"
import { FiSearch, FiChevronDown, FiHeart } from "react-icons/fi"

function HomeCliente() {
  const [categoria, setCategoria] = useState("")
  const [filtroOrden, setFiltroOrden] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [categoriaAbierta, setCategoriaAbierta] = useState(false)
  const [filtroAbierto, setFiltroAbierto] = useState(false)

  // Datos de ejemplo para las categorías
  const categorias = ["Manga", "Comic", "Novela Ligera", "Artbook", "Revista"]
  const opcionesFiltro = ["A-Z", "Z-A"]

  // Ejemplo de producto (puedes eliminar esto cuando consumas la API)
  const productoEjemplo = {
    id: 1,
    imagen: "/src/assets/MangaImagen.jpg",
    nombre: "Manga: One Piece N1",
    tomo: "Tomo número 1",
    precio: "$402",
  }

  return (
    <div className="min-h-screen bg-[#FFF5F5] px-[160px] py-8">
      {/* Sección de filtros */}
      <div className="grid grid-cols-12 gap-4 mb-8">
        {/* Filtro de Categoría - searchable dropdown */}
        <div className="col-span-4 relative">
          <label className="block text-sm font-medium mb-2">Categoría</label>
          <div className="relative">
            <input
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              onFocus={() => setCategoriaAbierta(true)}
              placeholder="Elegir categoría"
              className="w-full h-11 px-4 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#22C55E]"
            />
            <button
              onClick={() => setCategoriaAbierta(!categoriaAbierta)}
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-500"
            >
              <FiChevronDown size={24} />
            </button>

            {categoriaAbierta && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
                {categorias
                  .filter((cat) => cat.toLowerCase().includes(categoria.toLowerCase()))
                  .map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCategoria(cat)
                        setCategoriaAbierta(false)
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Filtro de orden alfabético */}
        <div className="col-span-4 relative">
          <label className="block text-sm font-medium mb-2">Filtro</label>
          <div className="relative">
            <input
              type="text"
              value={filtroOrden}
              readOnly
              placeholder="Elegir categoría"
              className="w-full h-11 px-4 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#22C55E] cursor-pointer"
              onClick={() => setFiltroAbierto(!filtroAbierto)}
            />
            <button
              onClick={() => setFiltroAbierto(!filtroAbierto)}
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-500"
            >
              <FiChevronDown size={24} />
            </button>

            {filtroAbierto && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                {opcionesFiltro.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFiltroOrden(opcion)
                      setFiltroAbierto(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Buscador */}
        <div className="col-span-4">
          <label className="block text-sm font-medium mb-2">Buscar</label>
          <div className="relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar"
              className="w-full h-11 px-4 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#22C55E]"
            />
            <button className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-[#22C55E]">
              <FiSearch size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Mangas más destacados */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mangas más destacados</h2>

        <div className="grid grid-cols-12 gap-4">
          {/* Card de ejemplo - Puedes eliminar esto y mapear tu array de productos desde la API */}
          <div className="col-span-3 bg-white rounded-lg shadow-md overflow-hidden relative">
            {/* Botón de favoritos */}
            <button className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100 z-10">
              <FiHeart size={24} className="text-gray-700" />
            </button>

            {/* Imagen del producto */}
            <div className="w-full aspect-[3/4] overflow-hidden">
              <img
                src="/src/assets/MangaImagen.jpg"
                alt={productoEjemplo.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información del producto */}
            <div className="p-4">
              <h3 className="font-medium text-sm mb-1">{productoEjemplo.nombre}</h3>
              <p className="text-xs text-gray-500 mb-2">{productoEjemplo.tomo}</p>
              <p className="text-lg font-bold text-[#22C55E]">{productoEjemplo.precio}</p>
            </div>
          </div>

          {/* Aquí irían las demás cards cuando consumas la API */}
          {/* Ejemplo de cómo mapearías los productos:
          {productos.map((producto) => (
            <div key={producto.id} className="col-span-3 bg-white rounded-lg shadow-md overflow-hidden relative">
              ...
            </div>
          ))}
          */}
        </div>
      </div>

      {/* Sección de Productos relacionados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>

        <div className="grid grid-cols-12 gap-4">
          {/* Aquí también mapearías los productos relacionados desde la API */}
        </div>
      </div>
    </div>
  )
}

export default HomeCliente;