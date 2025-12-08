import { useState } from "react"

function PerfilUsuario() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    telefono: "",
    estado: "",
    ciudad: "",
    direccion: "",
    codigoPostal: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleActualizar = (e) => {
    e.preventDefault()
    console.log("Actualizar perfil:", formData)
  }

  const handleModificarContrasena = () => {
    // Aquí puedes navegar a la vista de modificar contraseña o abrir un modal
    console.log("Ir a modificar contraseña")
  }

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Contenedor principal con padding lateral de 160px (px-40 equivale a 160px) */}
      <div className="w-full px-40">
        {/* Header con título y botón */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Perfil</h1>

          {/* Botón Modificar contraseña */}
          <button
            type="button"
            onClick={handleModificarContrasena}
            className="h-11 px-6 bg-orange-500 text-white font-medium rounded-lg
                     hover:bg-orange-600 active:bg-orange-700
                     transition-colors duration-200"
          >
            Modificar contraseña
          </button>
        </div>

        {/* Formulario */}
        <div className="space-y-8">
          {/* Sección: Datos personales */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Datos personales</h2>

            <div className="space-y-6">
              {/* Fila 1: Nombres, Apellido Paterno, Apellido Materno */}
              <div className="grid grid-cols-12 gap-4">
                {/* Nombres - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombres (s)*
                  </label>
                  <input
                    id="nombres"
                    name="nombres"
                    type="text"
                    value={formData.nombres}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre(s)"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                {/* Apellido Paterno - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido paterno*
                  </label>
                  <input
                    id="apellidoPaterno"
                    name="apellidoPaterno"
                    type="text"
                    value={formData.apellidoPaterno}
                    onChange={handleChange}
                    placeholder="Ingresá tu apellido paterno"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                {/* Apellido Materno - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido materno*
                  </label>
                  <input
                    id="apellidoMaterno"
                    name="apellidoMaterno"
                    type="text"
                    value={formData.apellidoMaterno}
                    onChange={handleChange}
                    placeholder="Ingresá tu apellido materno"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>

              {/* Fila 2: Número de teléfono */}
              <div className="grid grid-cols-12 gap-4">
                {/* Teléfono - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ingresá tu número de teléfono"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Domicilio */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Domicilio</h2>

            <div className="space-y-6">
              {/* Fila 1: Estado, Ciudad, Dirección */}
              <div className="grid grid-cols-12 gap-4">
                {/* Estado - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                    Estado*
                  </label>
                  <input
                    id="estado"
                    name="estado"
                    type="text"
                    value={formData.estado}
                    onChange={handleChange}
                    placeholder="Ingresá tu estado"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                {/* Ciudad - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad*
                  </label>
                  <input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    value={formData.ciudad}
                    onChange={handleChange}
                    placeholder="Ingresá tu ciudad"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                {/* Dirección - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección*
                  </label>
                  <input
                    id="direccion"
                    name="direccion"
                    type="text"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Ingresá tu dirección"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>

              {/* Fila 2: Código postal */}
              <div className="grid grid-cols-12 gap-4">
                {/* Código postal - 4 columnas */}
                <div className="col-span-4">
                  <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700 mb-2">
                    Código postal*
                  </label>
                  <input
                    id="codigoPostal"
                    name="codigoPostal"
                    type="text"
                    value={formData.codigoPostal}
                    onChange={handleChange}
                    placeholder="Ingresá tu código postal"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botón Actualizar - alineado a la derecha */}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={handleActualizar}
              className="h-11 px-8 bg-green-600 text-white font-medium rounded-lg
                       hover:bg-green-700 active:bg-green-800
                       transition-colors duration-200"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilUsuario

