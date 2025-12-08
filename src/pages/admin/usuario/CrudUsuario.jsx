import { useState } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"

function CrudUsuario() {
  const [usuarios] = useState([
    {
      id: 1,
      apellidoPaterno: "Márquez",
      apellidoMaterno: "Bailon",
      nombre: "Elías Manuel",
      correo: "20233tn064@utez.edu.mx",
      tipoUsuario: "Empleado",
      rol: "Empleado",
      estado: "Activo",
    },
    {
      id: 2,
      apellidoPaterno: "García",
      apellidoMaterno: "López",
      nombre: "María Isabel",
      correo: "maria.garcia@utez.edu.mx",
      tipoUsuario: "Repartidor",
      rol: "Repartidor",
      estado: "Activo",
    },
  ])

  const handleAgregar = () => {
    console.log("Abrir modal para agregar usuario")
  }

  const handleEditar = (id) => {
    console.log("Editar usuario:", id)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="usuarios" />
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
                <th className="text-left p-4 font-semibold">Apellido paterno</th>
                <th className="text-left p-4 font-semibold">Apellido materno</th>
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Correo electrónico</th>
                <th className="text-left p-4 font-semibold">Tipo de usuario</th>
                <th className="text-left p-4 font-semibold">Rol</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="bg-[#a8e6a3] border-b border-gray-300">
                  <td className="p-4">{usuario.apellidoPaterno}</td>
                  <td className="p-4">{usuario.apellidoMaterno}</td>
                  <td className="p-4">{usuario.nombre}</td>
                  <td className="p-4">{usuario.correo}</td>
                  <td className="p-4">{usuario.tipoUsuario}</td>
                  <td className="p-4">{usuario.rol}</td>
                  <td className="p-4">{usuario.estado}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEditar(usuario.id)}
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

export default CrudUsuario
