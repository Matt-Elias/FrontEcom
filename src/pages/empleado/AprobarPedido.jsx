import { useState } from "react"
import { FiCalendar } from "react-icons/fi"

function AprobarPedido() {
  const [fechaEstimada, setFechaEstimada] = useState("")
  const [accionSeleccionada, setAccionSeleccionada] = useState(null) // 'aprobar' o 'rechazar'
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [tipoAlerta, setTipoAlerta] = useState("")

  // Datos del pedido (vendrían de la navegación o API)
  const pedido = {
    cliente: "Elías Manuel Márquez Bailón",
    direccion: "Calle Aja #43",
    correo: "elias@gmail.com",
    telefono: "7772167599",
    fechaCreacion: "15 / Noviembre / 2025 8:22 AM",
    historial: [
      { fecha: "15/02/2025", estado: "Pedido creado" },
      { fecha: "17/02/2025", estado: "--" },
    ],
  }

  const handleAccionClick = (accion) => {
    setAccionSeleccionada(accion)
  }

  const handleGuardar = () => {
    if (!accionSeleccionada) {
      alert("Por favor selecciona una acción (Aprobar o Rechazar)")
      return
    }

    if (!fechaEstimada) {
      alert("Por favor selecciona una fecha estimada de entrega")
      return
    }

    setTipoAlerta(accionSeleccionada)
    setMostrarAlerta(true)
  }

  const confirmarAccion = () => {
    console.log("[v0] Acción confirmada:", accionSeleccionada)
    console.log("[v0] Fecha estimada:", fechaEstimada)
    // Aquí guardarías los cambios y actualizarías el estado del pedido
    setMostrarAlerta(false)
    alert(`Pedido ${accionSeleccionada === "aprobar" ? "aprobado" : "rechazado"} exitosamente`)
  }

  const cancelarAccion = () => {
    setMostrarAlerta(false)
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Formulario */}
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

            {/* Fecha estimada de entrega - EDITABLE */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Fecha estimada de entrega</label>
              <div className="relative">
                <input
                  type="date"
                  value={fechaEstimada}
                  onChange={(e) => setFechaEstimada(e.target.value)}
                  className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
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

          {/* Acciones del pedido */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-sm font-medium mb-3">Acciones del pedido</h3>
            <div className="flex gap-3">
              <button
                onClick={() => handleAccionClick("rechazar")}
                className={`px-6 h-11 rounded font-medium transition-colors ${
                  accionSeleccionada === "rechazar"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Rechazar
              </button>
              <button
                onClick={() => handleAccionClick("aprobar")}
                className={`px-6 h-11 rounded font-medium transition-colors ${
                  accionSeleccionada === "aprobar"
                    ? "bg-[#4CAF50] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Aprobar
              </button>
            </div>
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
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {tipoAlerta === "aprobar" ? "¿Aprobar pedido?" : "¿Rechazar pedido?"}
            </h3>
            <p className="text-gray-600 mb-6">
              {tipoAlerta === "aprobar"
                ? "¿Estás seguro de aprobar este pedido?"
                : "¿Estás seguro de rechazar este pedido? Esta acción no se puede deshacer."}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelarAccion}
                className="px-6 h-11 bg-gray-300 text-gray-700 rounded font-medium hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarAccion}
                className={`px-6 h-11 rounded font-medium transition-colors ${
                  tipoAlerta === "aprobar"
                    ? "bg-[#4CAF50] text-white hover:bg-[#45A049]"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
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

export default AprobarPedido;
