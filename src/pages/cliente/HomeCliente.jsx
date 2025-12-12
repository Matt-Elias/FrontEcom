import { useEffect, useMemo, useState } from "react"
import { FiSearch, FiChevronDown, FiHeart } from "react-icons/fi"

// tus APIs (fetch)
import { obtenerCategorias } from "../../../src/api/categoriasApi"
import { obtenerProductos } from "../../../src/api/productosApi"

function HomeCliente() {
  // UI
  const [categoria, setCategoria] = useState("") // texto del input
  const [categoriaId, setCategoriaId] = useState(null) // id real seleccionado
  const [filtroOrden, setFiltroOrden] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [categoriaAbierta, setCategoriaAbierta] = useState(false)
  const [filtroAbierto, setFiltroAbierto] = useState(false)

  // DATA real
  const [categorias, setCategorias] = useState([]) // [{id, nombreCategoria}]
  const [productos, setProductos] = useState([])   // [{id, nombreProducto, precio, categoriaId, categoria:{...}}]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const opcionesFiltro = ["A-Z", "Z-A"]

  useEffect(() => {
  let alive = true;

  const cargar = async () => {
      try {
        console.log("🚀 Iniciando consumo de API...");

        console.log("📩 Llamando obtenerCategorias()...");
        const cats = await obtenerCategorias();
        console.log("✅ Categorías recibidas:", cats);

        console.log("📩 Llamando obtenerProductos()...");
        const prods = await obtenerProductos();
        console.log("✅ Productos recibidos:", prods);

        if (!alive) return;

        setCategorias(cats);
        setProductos(prods);

        console.log("🧠 Estado actualizado: categorias y productos set.");
      } catch (e) {
        console.error("❌ Error consumiendo API:", e);
        setError(e.message || "Error cargando datos");
      } finally {
        console.log("🏁 Finalizó el consumo (ok o error).");
        setLoading(false);
      }
    };

    cargar();

    return () => {
      alive = false;
      console.log("🧹 Cleanup: componente desmontado, cancelando setState.");
    };
  }, []);


  // helper imagen (si tu API guarda rutas tipo "/uploads/xxx.png")
  const imgUrl = (p) => {
    if (!p.imagenPng) return "/src/assets/MangaImagen.jpg"
    // si ya viene URL completa, úsala tal cual
    if (p.imagenPng.startsWith("http")) return p.imagenPng
    // si viene ruta relativa, prefija el backend:
    return `http://localhost:4000${p.imagenPng}`
  }

  // productos filtrados + ordenados
  const productosFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase()

    let arr = productos.filter((p) => {
      const matchCat = !categoriaId || String(p.categoriaId) === String(categoriaId)
      const matchText =
        !q ||
        p.nombreProducto?.toLowerCase().includes(q) ||
        p.autor?.toLowerCase().includes(q) ||
        p.editorial?.toLowerCase().includes(q)

      return matchCat && matchText
    })

    if (filtroOrden === "A-Z") {
      arr = arr.sort((a, b) => (a.nombreProducto || "").localeCompare(b.nombreProducto || ""))
    }
    if (filtroOrden === "Z-A") {
      arr = arr.sort((a, b) => (b.nombreProducto || "").localeCompare(a.nombreProducto || ""))
    }

    return arr
  }, [productos, categoriaId, busqueda, filtroOrden])

  if (loading) return <div className="p-6">Cargando...</div>
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>

  return (
    <div className="min-h-screen bg-[#FFF5F5] px-[160px] py-8">
      {/* Sección de filtros */}
      <div className="grid grid-cols-12 gap-4 mb-8">
        {/* Categoría */}
        <div className="col-span-4 relative">
          <label className="block text-sm font-medium mb-2">Categoría</label>

          <div className="relative">
            <input
              type="text"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value)
                setCategoriaId(null) // si el usuario escribe, “resetea” selección
              }}
              onFocus={() => setCategoriaAbierta(true)}
              placeholder="Elegir categoría"
              className="w-full h-11 px-4 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#22C55E]"
            />

            <button
              onClick={() => setCategoriaAbierta(!categoriaAbierta)}
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-500"
              type="button"
            >
              <FiChevronDown size={24} />
            </button>

            {categoriaAbierta && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
                {/* opción para "todas" */}
                <button
                  onClick={() => {
                    setCategoria("")
                    setCategoriaId(null)
                    setCategoriaAbierta(false)
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  type="button"
                >
                  Todas
                </button>

                {categorias
                  .filter((c) =>
                    c.nombreCategoria?.toLowerCase().includes(categoria.toLowerCase())
                  )
                  .map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setCategoria(c.nombreCategoria)
                        setCategoriaId(c.id)
                        setCategoriaAbierta(false)
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      type="button"
                    >
                      {c.nombreCategoria}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Orden */}
        <div className="col-span-4 relative">
          <label className="block text-sm font-medium mb-2">Filtro</label>
          <div className="relative">
            <input
              type="text"
              value={filtroOrden}
              readOnly
              placeholder="Elegir filtro"
              className="w-full h-11 px-4 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#22C55E] cursor-pointer"
              onClick={() => setFiltroAbierto(!filtroAbierto)}
            />
            <button
              onClick={() => setFiltroAbierto(!filtroAbierto)}
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-500"
              type="button"
            >
              <FiChevronDown size={24} />
            </button>

            {filtroAbierto && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                {opcionesFiltro.map((opcion) => (
                  <button
                    key={opcion}
                    onClick={() => {
                      setFiltroOrden(opcion)
                      setFiltroAbierto(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    type="button"
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
            <button
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-[#22C55E]"
              type="button"
            >
              <FiSearch size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Mangas más destacados */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mangas más destacados</h2>

        <div className="grid grid-cols-12 gap-4">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="col-span-3 bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              <button className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100 z-10" type="button">
                <FiHeart size={24} className="text-gray-700" />
              </button>

              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={imgUrl(p)}
                  alt={p.nombreProducto}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-sm mb-1">{p.nombreProducto}</h3>
                <p className="text-xs text-gray-500 mb-2">
                  {p.categoria?.nombreCategoria ?? "Sin categoría"}
                </p>
                <p className="text-lg font-bold text-[#22C55E]">
                  ${Number(p.precio).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {productosFiltrados.length === 0 && (
            <p className="col-span-12 text-gray-600">No hay productos con esos filtros.</p>
          )}
        </div>
      </div>

      {/* Sección de Productos relacionados (si quieres luego haces otro filtro/segmento) */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-12 gap-4">
          {/* aquí puedes reutilizar productosFiltrados o hacer otra lógica */}
        </div>
      </div>
    </div>
  )
}

export default HomeCliente
