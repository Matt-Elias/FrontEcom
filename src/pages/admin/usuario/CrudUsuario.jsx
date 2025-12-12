import { useState, useEffect } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

function CrudUsuario() {
  const [usuarios, setUsuarios] = useState([])
  const [error, setError] = useState("")
  const [modalAgregarOpen, setModalAgregarOpen] = useState(false)
  const [formAgregar, setFormAgregar] = useState({
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombre: "",
    correo: "",
    tipoUsuario: "",
    rol: "",
    estado: "",
    estadoPais: "",
    ciudad: "",
    direccion: "",
    codigoPostal: "",
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:4000/api/usuarios", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsuarios(data)
          setError("")
        } else {
          setUsuarios([])
          setError(data.error || "Error al cargar usuarios o no autorizado.")
        }
      })
      .catch(() => {
        setUsuarios([])
        setError("Error al conectar con el servidor.")
      })
  }, [modalAgregarOpen])

  const handleAgregar = () => {
    setFormAgregar({
      apellidoPaterno: "",
      apellidoMaterno: "",
      nombre: "",
      correo: "",
      tipoUsuario: "",
      rol: "",
      estado: "",
      estadoPais: "",
      ciudad: "",
      direccion: "",
      codigoPostal: "",
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
    fetch("http://localhost:4000/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  const handleEditar = (id) => {
    console.log("Editar usuario:", id)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="usuarios" />
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
                <th className="text-left p-4 font-semibold">Apellido paterno</th>
                <th className="text-left p-4 font-semibold">Apellido materno</th>
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Correo electrónico</th>
                <th className="text-left p-4 font-semibold">Tipo de usuario</th>
                <th className="text-left p-4 font-semibold">Rol</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(usuarios) && usuarios.length > 0 ? (
                usuarios.map((usuario) => (
                  <tr
                    key={usuario.id}
                    className="bg-[#a8e6a3] border-b border-gray-300"
                  >
                    <td className="p-4">{usuario.apellidoPaterno}</td>
                    <td className="p-4">{usuario.apellidoMaterno}</td>
                    <td className="p-4">{usuario.nombre}</td>
                    <td className="p-4">{usuario.correo}</td>
                    <td className="p-4">{usuario.tipoUsuario}</td>
                    <td className="p-4">{usuario.rol}</td>
                    <td className="p-4">{usuario.estado}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleEditar(usuario.id)}
                        className="w-11 h-11 bg-[#ff6b4a] text-white rounded-full hover:bg-[#ff5532] transition-colors flex items-center justify-center mx-auto"
                      >
                        <FiEdit2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={12} className="p-4 text-center text-red-500">
                    {error || "No hay usuarios para mostrar."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalAgregarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b-4 border-orange-500 bg-orange-500 rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">Agregar Usuario</h2>
              <button
                onClick={handleCerrarAgregarModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleGuardarAgregar} className="p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido paterno
                  </label>
                  <input
                    type="text"
                    name="apellidoPaterno"
                    value={formAgregar.apellidoPaterno}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido materno
                  </label>
                  <input
                    type="text"
                    name="apellidoMaterno"
                    value={formAgregar.apellidoMaterno}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formAgregar.correo}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de usuario
                  </label>
                  <input
                    type="text"
                    name="tipoUsuario"
                    value={formAgregar.tipoUsuario}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rol
                  </label>
                  <input
                    type="text"
                    name="rol"
                    value={formAgregar.rol}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <input
                    type="text"
                    name="estado"
                    value={formAgregar.estado}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado/Pais
                  </label>
                  <input
                    type="text"
                    name="estadoPais"
                    value={formAgregar.estadoPais}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formAgregar.ciudad}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formAgregar.direccion}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    name="codigoPostal"
                    value={formAgregar.codigoPostal}
                    onChange={handleInputAgregarChange}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                  />
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

export default CrudUsuario
