import { useState } from "react"

function ConfirmarEntrega() {
  const [entregaConfirmada, setEntregaConfirmada] = useState(false)
  const [mostrarAlerta, setMostrarAlerta] = useState(false)

  // Datos del pedido
  const pedido = {
    cliente: "Elías Manuel Márquez Bailón",
    direccion: "Calle Aja #43",
    correo: "elias@gmail.com",
    telefono: "7772167599",
    fechaCreacion: "15 / Noviembre / 2025 8:22 AM",
    fechaEstimada: "17 / Noviembre / 2025",
    historial: [
      { fecha: "15/02/2025", estado: "Pedido creado" },
      { fecha: "16/02/2025", estado: "Pedido aceptado" },
      { fecha: "17/02/2025", estado: "Pedido en camino" },
    ],
  }

  const handleConfirmarClick = () => {
    setEntregaConfirmada(!entregaConfirmada)
  }

  const handleGuardar = () => {
    if (!entregaConfirmada) {
      alert("Por favor confirma la entrega del pedido antes de guardar")
      return
    }
    setMostrarAlerta(true)
  }

  const confirmarAccion = () => {
    console.log("[v0] Pedido confirmado como entregado")
    setMostrarAlerta(false)
    alert("Pedido confirmado como entregado exitosamente")
    // Aquí navegarías de vuelta al HomeEmpleado con el estado actualizado
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-300">Datos del pedido</h2>

          {/* Grid de campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Cliente */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Cliente</label>
              <input
                type="text"
                value={pedido.cliente}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Dirección</label>
              <input
                type="text"
                value={pedido.direccion}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Correo electrónico */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                value={pedido.correo}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Teléfono</label>
              <input
                type="text"
                value={pedido.telefono}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Fecha de creación */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Fecha de creación</label>
              <input
                type="text"
                value={pedido.fechaCreacion}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Fecha estimada de entrega */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Fecha estimada de entrega</label>
              <input
                type="text"
                value={pedido.fechaEstimada}
                disabled
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Historial */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-sm font-medium mb-3">Historial</h3>
            <div className="space-y-2">
              {pedido.historial.map((item, index) => (
                <div key={index} className="flex gap-4 text-sm text-gray-600">
                  <span className="font-medium">{item.fecha}</span>
                  <span>--</span>
                  <span>{item.estado}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmar pedido entregado */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-sm font-medium mb-3">Confirmar pedido entregado</h3>
            <button
              onClick={handleConfirmarClick}
              className={`px-6 h-11 rounded font-medium transition-colors ${
                entregaConfirmada ? "bg-[#4CAF50] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Confirmar
            </button>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end gap-3">
            <button className="px-6 h-11 bg-gray-300 text-gray-700 rounded font-medium hover:bg-gray-400 transition-colors">
              Cancelar
            </button>
            <button
              onClick={handleGuardar}
              className="px-6 h-11 bg-[#FF7043] text-white rounded font-medium hover:bg-[#F4511E] transition-colors"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>

      {/* Modal de alerta */}
      {mostrarAlerta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">¿Confirmar entrega?</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de confirmar que este pedido ha sido entregado al cliente? Esta acción finalizará el proceso
              de compra.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setMostrarAlerta(false)}
                className="px-6 h-11 bg-gray-300 text-gray-700 rounded font-medium hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarAccion}
                className="px-6 h-11 bg-[#4CAF50] text-white rounded font-medium hover:bg-[#45A049] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConfirmarEntrega;
