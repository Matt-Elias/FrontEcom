import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

function ModificarContra() {
  const [formData, setFormData] = useState({
    contrasena: "",
    confirmarContrasena: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCambiar = (e) => {
    e.preventDefault()
    console.log("Cambiar contraseña:", formData)
  }

  const handleCancelar = () => {
    console.log("Cancelar cambio de contraseña")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      {/* Contenedor principal centrado */}
      <div className="w-full max-w-4xl px-40">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Modificar contraseña</h1>

        {/* Subtítulo */}
        <p className="text-sm text-gray-600 mb-8 text-center">Por favor, ingrese una contraseña segura.</p>

        {/* Formulario */}
        <div className="space-y-6">
          {/* Fila con dos campos de contraseña */}
          <div className="grid grid-cols-2 gap-6">
            {/* Contraseña */}
            <div>
              <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña*
              </label>
              <div className="relative">
                <input
                  id="contrasena"
                  name="contrasena"
                  type={showPassword ? "text" : "password"}
                  value={formData.contrasena}
                  onChange={handleChange}
                  placeholder="Ingresá tu contraseña"
                  className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
                {/* Botón ojo - área de click de 44px */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-green-600 
                           hover:text-green-700 transition-colors duration-200"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                </button>
              </div>
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label htmlFor="confirmarContrasena" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña*
              </label>
              <div className="relative">
                <input
                  id="confirmarContrasena"
                  name="confirmarContrasena"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmarContrasena}
                  onChange={handleChange}
                  placeholder="Ingresá tu contraseña"
                  className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
                {/* Botón ojo - área de click de 44px */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-green-600 
                           hover:text-green-700 transition-colors duration-200"
                  aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Botones Cancelar y Cambiar contraseña */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancelar}
              className="h-11 px-8 bg-gray-400 text-white font-medium rounded-lg
                       hover:bg-gray-500 active:bg-gray-600
                       transition-colors duration-200"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleCambiar}
              className="h-11 px-8 bg-orange-500 text-white font-medium rounded-lg
                       hover:bg-orange-600 active:bg-orange-700
                       transition-colors duration-200"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModificarContra

