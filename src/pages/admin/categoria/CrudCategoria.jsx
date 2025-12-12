import { useState, useEffect } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

function CrudCategoria() {
  const [categorias, setCategorias] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [categoriaEditar, setCategoriaEditar] = useState(null)
  const [formData, setFormData] = useState({
    nombreCategoria: "",
    descripcion: "",
    estado: "Activo",
  })
  const [modalAgregarOpen, setModalAgregarOpen] = useState(false)
  const [formAgregar, setFormAgregar] = useState({
    nombreCategoria: "",
    descripcion: "",
    estado: "Activo",
  })

  useEffect(() => {
    fetch("http://localhost:4000/api/categorias")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data)
      })
      .catch(() => setCategorias([]))
  }, [modalOpen, modalAgregarOpen])

  const handleEditar = (id) => {
    const cat = categorias.find((c) => c.id === id)
    setCategoriaEditar(cat)
    setFormData({
      nombreCategoria: cat.nombreCategoria,
      descripcion: cat.descripcion,
      estado: cat.estado,
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
    const token = localStorage.getItem("token")
    fetch(`http://localhost:4000/api/categorias/${categoriaEditar.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setModalOpen(false)
        setCategoriaEditar(null)
      })
  }

  const handleCerrarModal = () => {
    setModalOpen(false)
    setCategoriaEditar(null)
  }

  const handleAgregar = () => {
    setFormAgregar({
      nombreCategoria: "",
      descripcion: "",
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
    const token = localStorage.getItem("token")
    fetch("http://localhost:4000/api/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(formAgregar),
    })
      .then((res) => res.json())
      .then(() => {
        setModalAgregarOpen(false)
      })
  }

  const handleCerrarAgregarModal = () => {
    setModalAgregarOpen(false)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="categorias" />
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
                <th className="text-left p-4 font-semibold">Descripción</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => (
                <tr
                  key={categoria.id}
                  className="bg-[#a8e6a3] border-b border-gray-300"
                >
                  <td className="p-4">{categoria.nombreCategoria}</td>
                  <td className="p-4">{categoria.descripcion}</td>
                  <td className="p-4">{categoria.estado}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEditar(categoria.id)}
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b-4 border-orange-500 bg-orange-500 rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">Editar Categoría</h2>
              <button onClick={handleCerrarModal} className="text-white hover:text-gray-200 transition-colors">
                <IoMdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleGuardar} className="p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre:</label>
                  <input
                    type="text"
                    name="nombreCategoria"
                    value={formData.nombreCategoria}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción:</label>
                  <input
                    type="text"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado:</label>
                  <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b-4 border-orange-500 bg-orange-500 rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">Agregar Categoría</h2>
              <button onClick={handleCerrarAgregarModal} className="text-white hover:text-gray-200 transition-colors">
                <IoMdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleGuardarAgregar} className="p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre:</label>
                  <input
                    type="text"
                    name="nombreCategoria"
                    value={formAgregar.nombreCategoria}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción:</label>
                  <input
                    type="text"
                    name="descripcion"
                    value={formAgregar.descripcion}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado:</label>
                  <select
                    name="estado"
                    value={formAgregar.estado}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
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

export default CrudCategoria

