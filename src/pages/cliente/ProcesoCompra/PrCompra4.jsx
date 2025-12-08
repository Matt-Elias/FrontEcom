function PrCompra4() {
  const handleAnterior = () => {
    console.log("Regresar al paso anterior")
    // Aquí irá la lógica para regresar al paso 3
  }

  const handleConfirmar = () => {
    console.log("Compra confirmada")
    // Aquí irá la lógica para confirmar la compra
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

            {/* Paso 2 - Completado */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                2
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-green-500 mx-2"></div>

            {/* Paso 3 - Completado */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                3
              </div>
            </div>

            {/* Línea conectora */}
            <div className="w-16 h-0.5 bg-green-500 mx-2"></div>

            {/* Paso 4 - Activo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de confirmación */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">¿Estás seguro de realizar el pedido?</h2>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAnterior}
            className="bg-gray-300 text-gray-700 px-8 py-2.5 rounded-lg font-medium hover:bg-gray-400 transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={handleConfirmar}
            className="bg-[#FF6B35] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#E55A2B] transition-colors"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrCompra4;
