import { useState } from "react"
import { IoMdClose } from "react-icons/io"

function AgregarUsuario({ onClose, onAgregar }) {
  const [formData, setFormData] = useState({
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombres: "",
    correo: "",
    tipoUsuario: "",
    rol: "",
    estado: "",
    ciudad: "",
    direccion: "",
    codigoPostal: "",
  })

  const tiposUsuario = ["Administrador", "Empleado", "Cargador", "Repartidor", "Cliente"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAgregar(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Agregar usuario</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Apellido paterno */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Apellido paterno</label>
              <input
                type="text"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
                placeholder="Ingrese el apellido paterno"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Apellido materno */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Apellido materno</label>
              <input
                type="text"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
                placeholder="Ingrese el apellido materno"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Nombres */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombres (s)</label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                placeholder="Ingrese el nombre(s)"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Correo electrónico */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                placeholder="Ingrese el correo electrónico"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Tipo de usuario */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de usuario</label>
              <select
                name="tipoUsuario"
                value={formData.tipoUsuario}
                onChange={handleInputChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              >
                <option value="">Selecciona un tipo de usuario</option>
                {tiposUsuario.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Rol */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-100 mb-2">Rol</label>
              <input
                type="text"
                name="rol"
                value={formData.rol}
                onChange={handleInputChange}
                placeholder="Rol"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Estado */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                placeholder="Ingrese el estado"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Ciudad */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
                placeholder="Ingrese la ciudad"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Dirección */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                placeholder="Ingrese la dirección"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>

            {/* Código Postal */}
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
              <input
                type="text"
                name="codigoPostal"
                value={formData.codigoPostal}
                onChange={handleInputChange}
                placeholder="Ingrese el código postal"
                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-8 h-11 bg-gray-300 hover:bg-gray-400 text-gray-100 rounded-md font-medium transition-colors"
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
  )
}

export default AgregarUsuario

