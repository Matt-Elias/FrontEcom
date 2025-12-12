import { useState } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

function CrudProducto() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Manga: One Piece",
      precio: "$804",
      cantidad: 2,
      autor: "Eiichiro Oda",
      editorial: "Shueisha",
      numPaginas: 192,
      categoria: "Anime",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "Manga: Death Note",
      precio: "$750",
      cantidad: 5,
      autor: "Tsugumi Ohba",
      editorial: "Shueisha",
      numPaginas: 200,
      categoria: "Anime",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Manga: Dragon Ball",
      precio: "$680",
      cantidad: 3,
      autor: "Akira Toriyama",
      editorial: "Shueisha",
      numPaginas: 192,
      categoria: "Anime",
      estado: "Activo",
    },
  ])
  const [modalOpen, setModalOpen] = useState(false)
  const [productoEditar, setProductoEditar] = useState(null)
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    cantidad: "",
    autor: "",
    editorial: "",
    numPaginas: "",
    categoria: "",
    estado: "Activo",
  })
  const [modalAgregarOpen, setModalAgregarOpen] = useState(false)
  const [formAgregar, setFormAgregar] = useState({
    nombre: "",
    precio: "",
    cantidad: "",
    autor: "",
    editorial: "",
    numPaginas: "",
    categoria: "",
    estado: "Activo",
  })

  const handleEditar = (id) => {
    const prod = productos.find((p) => p.id === id)
    setProductoEditar(prod)
    setFormData({
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: prod.cantidad,
      autor: prod.autor,
      editorial: prod.editorial,
      numPaginas: prod.numPaginas,
      categoria: prod.categoria,
      estado: prod.estado,
    })
    setModalOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGuardar = (e) => {
    e.preventDefault()
    // Aquí deberías hacer el fetch/PUT a tu API
    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoEditar.id ? { ...p, ...formData } : p
      )
    )
    setModalOpen(false)
    setProductoEditar(null)
  }

  const handleCerrarModal = () => {
    setModalOpen(false)
    setProductoEditar(null)
  }

  const handleAgregar = () => {
    setFormAgregar({
      nombre: "",
      precio: "",
      cantidad: "",
      autor: "",
      editorial: "",
      numPaginas: "",
      categoria: "",
      estado: "Activo",
    })
    setModalAgregarOpen(true)
  }

  const handleInputAgregarChange = (e) => {
    const { name, value } = e.target
    setFormAgregar((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGuardarAgregar = (e) => {
    e.preventDefault()
    // Aquí deberías hacer el fetch/POST a tu API
    setProductos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...formAgregar,
      },
    ])
    setModalAgregarOpen(false)
  }

  const handleCerrarAgregarModal = () => {
    setModalAgregarOpen(false)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="productos" />
          </div>
          <div className="col-span-2">
            <button
              onClick={handleAgregar}
              className="w-full h-11 bg-[#ff6b4a] text-white rounded font-medium hover:bg-[#ff5532] transition-colors flex items-center justify-center gap-2"
            >
              Agregar <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-300 border-b-2 border-gray-400">
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Precio</th>
                <th className="text-left p-4 font-semibold">Cantidad</th>
                <th className="text-left p-4 font-semibold">Autor</th>
                <th className="text-left p-4 font-semibold">Editorial</th>
                <th className="text-left p-4 font-semibold">No° Páginas</th>
                <th className="text-left p-4 font-semibold">Categoría</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="bg-[#a8e6a3] border-b border-gray-300">
                  <td className="p-4">{producto.nombre}</td>
                  <td className="p-4">{producto.precio}</td>
                  <td className="p-4">{producto.cantidad}</td>
                  <td className="p-4">{producto.autor}</td>
                  <td className="p-4">{producto.editorial}</td>
                  <td className="p-4">{producto.numPaginas}</td>
                  <td className="p-4">{producto.categoria}</td>
                  <td className="p-4">{producto.estado}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEditar(producto.id)}
                      className="w-11 h-11 bg-[#ff6b4a] text-white rounded-full hover:bg-[#ff5532] transition-colors flex items-center justify-center mx-auto"
                    >
                      <FiEdit2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b-4 border-orange-500 bg-orange-500 rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">Editar Producto</h2>
              <button onClick={handleCerrarModal} className="text-white hover:text-gray-200 transition-colors">
                <IoMdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleGuardar} className="p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio</label>
                  <input
                    type="text"
                    name="precio"
                    value={formData.precio}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
                  <input
                    type="text"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                  <input
                    type="text"
                    name="autor"
                    value={formData.autor}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Editorial</label>
                  <input
                    type="text"
                    name="editorial"
                    value={formData.editorial}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">No° Páginas</label>
                  <input
                    type="text"
                    name="numPaginas"
                    value={formData.numPaginas}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                  <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                  <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleCerrarModal}
                  className="px-8 h-11 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-8 h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {modalAgregarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b-4 border-orange-500 bg-orange-500 rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">Agregar Producto</h2>
              <button onClick={handleCerrarAgregarModal} className="text-white hover:text-gray-200 transition-colors">
                <IoMdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleGuardarAgregar} className="p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formAgregar.nombre}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio</label>
                  <input
                    type="text"
                    name="precio"
                    value={formAgregar.precio}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
                  <input
                    type="text"
                    name="cantidad"
                    value={formAgregar.cantidad}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                  <input
                    type="text"
                    name="autor"
                    value={formAgregar.autor}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Editorial</label>
                  <input
                    type="text"
                    name="editorial"
                    value={formAgregar.editorial}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">No° Páginas</label>
                  <input
                    type="text"
                    name="numPaginas"
                    value={formAgregar.numPaginas}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                  <input
                    type="text"
                    name="categoria"
                    value={formAgregar.categoria}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                  <select
                    name="estado"
                    value={formAgregar.estado}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleCerrarAgregarModal}
                  className="px-8 h-11 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-8 h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CrudProducto
