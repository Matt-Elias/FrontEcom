import { useState } from "react"

function PrCompra3() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    codigoPostal: "",
    estado: "",
    ciudad: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAnterior = () => {
    console.log("Regresar al paso anterior")
    // Aquí irá la lógica para regresar al paso 2
  }

  const handleSiguiente = () => {
    console.log("Datos de dirección:", formData)
    // Aquí irá la lógica para avanzar al paso 4
  }

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Indicador de progreso */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            {/* Paso 1 - Completado */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                1
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-green-500 mx-2"></div>

            {/* Paso 2 - Completado */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                2
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-green-500 mx-2"></div>

            {/* Paso 3 - Activo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                3
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-gray-300 mx-2"></div>

            {/* Paso 4 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="mb-6">
          <p className="text-gray-700 text-center">
            Proporciona la información de tu tarjeta de crédito para validar la compra.
          </p>
        </div>

        {/* Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Número de teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Número de teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Dirección <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Código postal */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Código postal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Estado */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Estado <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Ciudad */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Ciudad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleAnterior}
            className="bg-gray-300 text-gray-700 px-8 py-2.5 rounded-lg font-medium hover:bg-gray-400 transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={handleSiguiente}
            className="bg-[#FF6B35] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#E55A2B] transition-colors"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrCompra3;
