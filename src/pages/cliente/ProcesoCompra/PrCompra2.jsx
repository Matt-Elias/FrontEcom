import { useState } from "react"
import { FaCalendarAlt, FaEye, FaEyeSlash } from "react-icons/fa"

function PrCompra2() {
  const [numeroTarjeta, setNumeroTarjeta] = useState("")
  const [fechaCaducidad, setFechaCaducidad] = useState("")
  const [cvv, setCvv] = useState("")
  const [nombreTitular, setNombreTitular] = useState("")
  const [mostrarCvv, setMostrarCvv] = useState(false)

  const formatearNumeroTarjeta = (valor) => {
    const numero = valor.replace(/\s/g, "")
    const grupos = numero.match(/.{1,4}/g)
    return grupos ? grupos.join(" ") : ""
  }

  const handleNumeroTarjetaChange = (e) => {
    const valor = e.target.value.replace(/\s/g, "")
    if (valor.length <= 16 && /^\d*$/.test(valor)) {
      setNumeroTarjeta(formatearNumeroTarjeta(valor))
    }
  }

  const handleAnterior = () => {
    console.log("Regresar al paso anterior")
    // Aquí irá la lógica para regresar al paso 1
  }

  const handleSiguiente = () => {
    console.log("Datos de tarjeta:", { numeroTarjeta, fechaCaducidad, cvv, nombreTitular })
    // Aquí irá la lógica para avanzar al paso 3
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

            {/* Paso 2 - Activo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                2
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-gray-300 mx-2"></div>

            {/* Paso 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold">
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
        <div className="space-y-5">
          {/* Número de tarjeta */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Número de tarjeta <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={numeroTarjeta}
              onChange={handleNumeroTarjetaChange}
              placeholder="1234 5678 9012 3456"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Fecha de caducidad */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Fecha de caducidad <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={fechaCaducidad}
                onChange={(e) => setFechaCaducidad(e.target.value)}
                placeholder="MM/YY"
                className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <div className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" size={20} />
              </div>
            </div>
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              CVV <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={mostrarCvv ? "text" : "password"}
                value={cvv}
                onChange={(e) => {
                  const valor = e.target.value
                  if (valor.length <= 4 && /^\d*$/.test(valor)) {
                    setCvv(valor)
                  }
                }}
                placeholder="123"
                className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setMostrarCvv(!mostrarCvv)}
                className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                {mostrarCvv ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          {/* Nombre del titular */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nombre del titular <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={nombreTitular}
              onChange={(e) => setNombreTitular(e.target.value)}
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

export default PrCompra2;

