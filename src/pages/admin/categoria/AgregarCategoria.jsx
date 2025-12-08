import { useState } from "react"
import { IoMdClose } from "react-icons/io"

function AgregarCategoria({ onClose, onAgregar }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
  })

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
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Agregar Categoría</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre categoría"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                        transition-all duration-200"
              required
            />
          </div>

          {/* Descripción */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción <span className="text-gray-400 text-xs">(opcional)</span>
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripción de la categoría"
              rows={6}
              className="w-full px-3 py-2 bg-white border border-gray-300 
                rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onClose}
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
  )
}

export default AgregarCategoria
