import { useState } from "react"
import { FiPackage } from "react-icons/fi"

function HomeEmpleado() {
  // Datos de ejemplo de pedidos
  const [pedidos] = useState([
    {
      id: 1,
      fecha: "10 Noviembre 2025 14:02",
      ubicacion: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$7232",
      estado: "En espera",
    },
    {
      id: 2,
      fecha: "10 Noviembre 2025 14:02",
      ubicacion: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$7232",
      estado: "Pedido aprobado",
    },
    {
      id: 3,
      fecha: "10 Noviembre 2025 14:02",
      ubicacion: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$7232",
      estado: "Pedido en camino",
    },
    {
      id: 4,
      fecha: "10 Noviembre 2025 14:02",
      ubicacion: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$7232",
      estado: "Pedido entregado",
    },
  ])

  const handleCardClick = (pedido) => {
    console.log("[v0] Pedido seleccionado:", pedido)
    // Aquí navegarías a AprobadoPedido.jsx con los datos del pedido
  }

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "En espera":
        return "bg-gray-200 text-gray-800"
      case "Pedido aprobado":
        return "bg-green-100 text-green-800"
      case "Pedido en camino":
        return "bg-blue-100 text-blue-800"
      case "Pedido entregado":
        return "bg-green-200 text-green-900"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FiPackage className="w-6 h-6" />
            Gestión de Pedidos
          </h1>
        </div>

        {/* Grid de pedidos - 2 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pedidos.map((pedido) => (
            <div
              key={pedido.id}
              onClick={() => handleCardClick(pedido)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Header verde */}
              <div className="bg-[#4CAF50] text-white px-4 py-3 flex justify-between items-center">
                <span className="font-medium">{pedido.fecha}</span>
                <span className="text-sm">{pedido.ubicacion}</span>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-2 bg-pink-50">
                <p className="text-gray-700">
                  <span className="font-semibold">Pedido:</span> {pedido.numeroPedido}
                </p>
                <p className="text-gray-700 text-sm">
                  {pedido.fechaInicio} - {pedido.fechaFin}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Cliente:</span> {pedido.cliente}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Productos:</span> {pedido.productos}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Total:</span> {pedido.total}
                </p>

                {/* Estado */}
                <div className="pt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded text-sm font-medium ${getEstadoColor(pedido.estado)}`}
                  >
                    Estado: {pedido.estado}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeEmpleado;
