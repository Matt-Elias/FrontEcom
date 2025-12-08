"use client"

import { useState, useEffect } from "react"
import { FaBox, FaClipboardCheck, FaCog, FaTruck, FaHandHoldingHeart } from "react-icons/fa"

function ProcesoEntrega() {
  // Estado para controlar qué fases están completadas
  const [fasesCompletadas, setFasesCompletadas] = useState([true, false, false, false, false])

  // Estado para las fechas de cada fase
  const [fechasFases, setFechasFases] = useState([
    new Date().toLocaleString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    null,
    null,
    null,
    null,
  ])

  // Productos del pedido (ejemplo)
  const [productos] = useState([
    {
      id: 1,
      nombre: "Manga: One piece N5",
      tomo: "Tomo numero 5",
      cantidad: 2,
      precio: 402,
      imagen: "/src/assets/MangaImagen.jpg",
    },
    {
      id: 2,
      nombre: "Manga: Death note N3",
      tomo: "Tomo numero 3",
      cantidad: 1,
      precio: 402,
      imagen: "/src/assets/MangaImagen.jpg",
    },
    {
      id: 3,
      nombre: "Manga: Dragon ball",
      tomo: "Tomo numero 1",
      cantidad: 1,
      precio: 402,
      imagen: "/src/assets/MangaImagen.jpg",
    },
  ])

  // Efecto para marcar automáticamente la fase 3 después de 1 minuto si la fase 2 está completada
  useEffect(() => {
    if (fasesCompletadas[1] && !fasesCompletadas[2]) {
      const timer = setTimeout(() => {
        const nuevasFases = [...fasesCompletadas]
        nuevasFases[2] = true
        setFasesCompletadas(nuevasFases)

        const nuevasFechas = [...fechasFases]
        nuevasFechas[2] = new Date().toLocaleString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        setFechasFases(nuevasFechas)
      }, 60000) // 1 minuto

      return () => clearTimeout(timer)
    }
  }, [fasesCompletadas, fechasFases])

  // Función para marcar una fase manualmente (simulando acción de empleado)
  const marcarFase = (index) => {
    if (!fasesCompletadas[index]) {
      const nuevasFases = [...fasesCompletadas]
      nuevasFases[index] = true
      setFasesCompletadas(nuevasFases)

      const nuevasFechas = [...fechasFases]
      nuevasFechas[index] = new Date().toLocaleString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setFechasFases(nuevasFechas)
    }
  }

  const fases = [
    {
      id: 1,
      icono: <FaBox className="w-6 h-6" />,
      titulo: "Pedido realizado",
      autoMarcar: false,
    },
    {
      id: 2,
      icono: <FaClipboardCheck className="w-6 h-6" />,
      titulo: "Aprobado",
      autoMarcar: false,
    },
    {
      id: 3,
      icono: <FaCog className="w-6 h-6" />,
      titulo: "En proceso",
      autoMarcar: true,
    },
    {
      id: 4,
      icono: <FaTruck className="w-6 h-6" />,
      titulo: "En camino",
      autoMarcar: false,
    },
    {
      id: 5,
      icono: <FaHandHoldingHeart className="w-6 h-6" />,
      titulo: "Entregado",
      autoMarcar: false,
    },
  ]

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Proceso de entrega */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-orange-500 text-white font-bold text-lg px-6 py-3">Proceso de entrega</div>

          <div className="p-6">
            <div className="grid grid-cols-5 gap-4">
              {fases.map((fase, index) => (
                <div key={fase.id} className="flex flex-col items-center">
                  {/* Icono */}
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-3 ${
                      fasesCompletadas[index] ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {fase.icono}
                  </div>

                  {/* Checkbox */}
                  <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer mb-2 ${
                      fasesCompletadas[index] ? "bg-black border-black" : "border-gray-400 bg-white"
                    }`}
                    onClick={() => {
                      // Solo permitir marcar manualmente las fases 2, 4 y 5
                      if ([1, 3, 4].includes(index) && !fase.autoMarcar) {
                        marcarFase(index)
                      }
                    }}
                  >
                    {fasesCompletadas[index] && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Fecha o "En espera" */}
                  <div className="text-center text-sm">
                    {fechasFases[index] ? (
                      <p className="text-gray-700 font-medium">{fechasFases[index]}</p>
                    ) : (
                      <p className="text-gray-500">En espera</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-500 text-white font-bold text-lg px-6 py-3">Productos</div>

          <div className="p-6">
            <div className="space-y-4">
              {productos.map((producto) => (
                <div key={producto.id} className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                  {/* Imagen del producto */}
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="w-20 h-28 object-cover rounded"
                  />

                  {/* Información del producto */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{producto.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-1">{producto.tomo}</p>
                    <p className="text-sm text-gray-600">Cantidad: {producto.cantidad}</p>
                  </div>

                  {/* Precio */}
                  <div className="text-right">
                    <p className="font-bold text-gray-800">${producto.precio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcesoEntrega;
