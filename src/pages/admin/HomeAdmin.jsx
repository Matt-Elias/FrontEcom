import { useState } from "react"
import NavegacionAdmin from "../../components/NavegacionAdmin"

function HomeAdmin() {
  // Datos de ejemplo de pedidos
  const [pedidos] = useState([
    {
      id: 1,
      fecha: "10 Noviembre 2025 14:02",
      ciudad: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$1232",
      estado: "Activo",
    },
    {
      id: 2,
      fecha: "10 Noviembre 2025 14:02",
      ciudad: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$1232",
      estado: "En espera",
    },
    {
      id: 3,
      fecha: "10 Noviembre 2025 14:02",
      ciudad: "Cuernavaca, Morelos",
      numeroPedido: "13215",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$1222",
      estado: "Cancelado",
    },
    {
      id: 4,
      fecha: "10 Noviembre 2025 14:02",
      ciudad: "Cuernavaca, Morelos",
      numeroPedido: "13213",
      fechaInicio: "10 Noviembre 2025 14:02",
      fechaFin: "14 Noviembre 2025 18:43",
      cliente: "Hugo Alejandro Omar",
      productos: 4,
      total: "$1232",
      estado: "Activo",
    },
  ])

  const obtenerColorEstado = (estado) => {
    switch (estado) {
      case "Activo":
        return "bg-[#22c55e]"
      case "En espera":
        return "bg-gray-400"
      case "Cancelado":
        return "bg-red-400"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        <NavegacionAdmin seccionActiva="pedidos" />

        <div className="grid grid-cols-12 gap-4">
          {pedidos.map((pedido) => (
            <div key={pedido.id} className="col-span-6 bg-white rounded-lg p-4 border-2 border-gray-400">
              <div
                className={`${obtenerColorEstado(pedido.estado)} text-black px-3 py-1 rounded inline-block text-sm font-medium mb-3`}
              >
                {pedido.fecha} - {pedido.ciudad}
              </div>

              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Pedido:</span> {pedido.numeroPedido}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">{pedido.fechaInicio}</span> -{" "}
                  <span className="font-semibold">{pedido.fechaFin}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Cliente:</span> {pedido.cliente}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Productos:</span> {pedido.productos}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Total:</span> {pedido.total}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Estado:</span> {pedido.estado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin

