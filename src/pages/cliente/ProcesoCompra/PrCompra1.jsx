import { useState } from "react"
import { FaCreditCard, FaMoneyBillWave, FaStore, FaTruck } from "react-icons/fa"

function PrCompra1() {
  const [metodoPago, setMetodoPago] = useState("tarjeta")
  const [metodoEntrega, setMetodoEntrega] = useState("tienda")

  const handleSiguiente = () => {
    console.log("Método de pago:", metodoPago)
    console.log("Método de entrega:", metodoEntrega)
    // Aquí irá la lógica para avanzar al siguiente paso
  }

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Indicador de progreso */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            {/* Paso 1 - Activo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                1
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-gray-300 mx-2"></div>

            {/* Paso 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold">
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

        {/* Sección de método de pago */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Selecciona tu método de pago preferido para continuar.</h3>

          <div className="space-y-3">
            {/* Opción Tarjeta de crédito/débito */}
            <label
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                metodoPago === "tarjeta" ? "border-green-500 bg-green-50" : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="metodoPago"
                value="tarjeta"
                checked={metodoPago === "tarjeta"}
                onChange={(e) => setMetodoPago(e.target.value)}
                className="w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaCreditCard className="ml-3 text-gray-700" size={20} />
              <span className="ml-3 text-gray-900">Tarjeta de crédito/débito</span>
            </label>

            {/* Opción Efectivo */}
            <label
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                metodoPago === "efectivo" ? "border-green-500 bg-green-50" : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="metodoPago"
                value="efectivo"
                checked={metodoPago === "efectivo"}
                onChange={(e) => setMetodoPago(e.target.value)}
                className="w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaMoneyBillWave className="ml-3 text-gray-700" size={20} />
              <span className="ml-3 text-gray-900">Efectivo</span>
            </label>
          </div>
        </div>

        {/* Sección de método de entrega */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Selecciona tu método de entrega preferido para continuar.</h3>

          <div className="space-y-3">
            {/* Opción Recoger en tienda */}
            <label
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                metodoEntrega === "tienda"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="metodoEntrega"
                value="tienda"
                checked={metodoEntrega === "tienda"}
                onChange={(e) => setMetodoEntrega(e.target.value)}
                className="w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaStore className="ml-3 text-gray-700" size={20} />
              <span className="ml-3 text-gray-900">Recoger en tienda</span>
            </label>

            {/* Opción Enviar a domicilio */}
            <label
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                metodoEntrega === "domicilio"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="metodoEntrega"
                value="domicilio"
                checked={metodoEntrega === "domicilio"}
                onChange={(e) => setMetodoEntrega(e.target.value)}
                className="w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaTruck className="ml-3 text-gray-700" size={20} />
              <span className="ml-3 text-gray-900">Enviar a domicilio</span>
            </label>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center">
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

export default PrCompra1
