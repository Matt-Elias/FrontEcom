import { useState } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"

function CrudCategoria() {
  const [categorias] = useState([
    {
      id: 1,
      nombre: "Comics romántica",
      descripcion: "Mangas con una historia romántica",
      estado: "Activo",
    },
  ])

  const handleAgregar = () => {
    console.log("Abrir modal para agregar categoría")
  }

  const handleEditar = (id) => {
    console.log("Editar categoría:", id)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="categorias" />
          </div>
          <div className="col-span-2">
            <button
              onClick={handleAgregar}
              className="w-full h-11 bg-[#ff6b4a] text-white rounded font-medium hover:bg-[#ff5532] transition-colors flex items-center justify-center gap-2"
            >
              Agregar <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-300 border-b-2 border-gray-400">
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Descripción</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => (
                <tr key={categoria.id} className="bg-[#a8e6a3] border-b border-gray-300">
                  <td className="p-4">{categoria.nombre}</td>
                  <td className="p-4">{categoria.descripcion}</td>
                  <td className="p-4">{categoria.estado}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEditar(categoria.id)}
                      className="w-11 h-11 bg-[#ff6b4a] text-white rounded-full hover:bg-[#ff5532] transition-colors flex items-center justify-center mx-auto"
                    >
                      <FiEdit2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CrudCategoria

