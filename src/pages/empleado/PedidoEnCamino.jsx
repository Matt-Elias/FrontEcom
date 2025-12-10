import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

function PedidoEnCamino() {
  const [repartidorSeleccionado, setRepartidorSeleccionado] = useState("")
  const [busquedaRepartidor, setBusquedaRepartidor] = useState("")
  const [mostrarDropdown, setMostrarDropdown] = useState(false)
  const [enCaminoMarcado, setEnCaminoMarcado] = useState(false)
  const [mostrarAlerta, setMostrarAlerta] = useState(false)

  // Lista de repartidores
  const repartidores = [
    "Juan Pérez García",
    "María López Martínez",
    "Carlos Rodríguez Sánchez",
    "Ana Fernández Torres",
    "Luis Gómez Ramírez",
    "Sofia Hernández Cruz",
  ]

  // Filtrar repartidores según búsqueda
  const repartidoresFiltrados = repartidores.filter((repartidor) =>
    repartidor.toLowerCase().includes(busquedaRepartidor.toLowerCase()),
  )

  // Datos del pedido
  const pedido = {
    cliente: "Elías Manuel Márquez Bailón",
    direccion: "Calle Aja #43",
    telefono: "7772167599",
    correo: "elias@gmail.com",
    fechaCreacion: "15 / Noviembre / 2025 8:22 AM",
    fechaEstimada: "17 / Noviembre / 2025",
    historial: [
      { fecha: "15/02/2025", estado: "Pedido creado" },
      { fecha: "16/02/2025", estado: "Pedido aceptado" },
    ],
  }

  const handleSeleccionarRepartidor = (repartidor) => {
    setRepartidorSeleccionado(repartidor)
    setBusquedaRepartidor("")
    setMostrarDropdown(false)
  }

  const handleEnCaminoClick = () => {
    if (!repartidorSeleccionado) {
      alert("Por favor selecciona un repartidor antes de marcar el pedido en camino")
      return
    }
    setEnCaminoMarcado(!enCaminoMarcado)
  }

  const handleGuardar = () => {
    if (!enCaminoMarcado) {
      alert('Por favor marca el pedido como "En camino" antes de guardar')
      return
    }
    setMostrarAlerta(true)
  }

  const confirmarAccion = () => {
    console.log("[v0] Pedido marcado en camino")
    console.log("[v0] Repartidor asignado:", repartidorSeleccionado)
    setMostrarAlerta(false)
    alert('Pedido marcado como "En camino" exitosamente')
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

          {/* Seleccionar repartidor */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-sm font-medium mb-3">Seleccionar repartidor</h3>
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={repartidorSeleccionado || busquedaRepartidor}
                  onChange={(e) => {
                    setBusquedaRepartidor(e.target.value)
                    setMostrarDropdown(true)
                  }}
                  onFocus={() => setMostrarDropdown(true)}
                  placeholder="Buscar repartidor..."
                  className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Dropdown */}
              {mostrarDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                  {repartidoresFiltrados.length > 0 ? (
                    repartidoresFiltrados.map((repartidor, index) => (
                      <button
                        key={index}
                        onClick={() => handleSeleccionarRepartidor(repartidor)}
                        className="w-full px-3 py-2 text-left hover:bg-green-50 transition-colors text-gray-700"
                      >
                        {repartidor}
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-gray-500 text-sm">No se encontraron repartidores</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Acciones del pedido */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-sm font-medium mb-3">Acciones del pedido</h3>
            <button
              onClick={handleEnCaminoClick}
              disabled={!repartidorSeleccionado}
              className={`px-6 h-11 rounded font-medium transition-colors ${
                enCaminoMarcado
                  ? "bg-[#4CAF50] text-white"
                  : repartidorSeleccionado
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              En camino
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
            <h3 className="text-lg font-bold text-gray-800 mb-4">¿Marcar pedido en camino?</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de marcar este pedido como "En camino" con el repartidor{" "}
              <strong>{repartidorSeleccionado}</strong>?
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

export default PedidoEnCamino;
