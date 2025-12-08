import { useState } from "react"
import NavegacionAdmin from "../../../components/NavegacionAdmin"
import { FiEdit2 } from "react-icons/fi"

function CrudProducto() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Manga: One Piece",
      precio: "$804",
      cantidad: 2,
      autor: "Eiichiro Oda",
      editorial: "Shueisha",
      numPaginas: 192,
      categoria: "Anime",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "Manga: Death Note",
      precio: "$750",
      cantidad: 5,
      autor: "Tsugumi Ohba",
      editorial: "Shueisha",
      numPaginas: 200,
      categoria: "Anime",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Manga: Dragon Ball",
      precio: "$680",
      cantidad: 3,
      autor: "Akira Toriyama",
      editorial: "Shueisha",
      numPaginas: 192,
      categoria: "Anime",
      estado: "Activo",
    },
  ])

  const handleAgregar = () => {
    console.log("Abrir modal para agregar producto")
  }

  const handleEditar = (id) => {
    console.log("Editar producto:", id)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-10">
            <NavegacionAdmin seccionActiva="productos" />
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
                <th className="text-left p-4 font-semibold">Precio</th>
                <th className="text-left p-4 font-semibold">Cantidad</th>
                <th className="text-left p-4 font-semibold">Autor</th>
                <th className="text-left p-4 font-semibold">Editorial</th>
                <th className="text-left p-4 font-semibold">No° Páginas</th>
                <th className="text-left p-4 font-semibold">Categoría</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-center p-4 font-semibold w-20"></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="bg-[#a8e6a3] border-b border-gray-300">
                  <td className="p-4">{producto.nombre}</td>
                  <td className="p-4">{producto.precio}</td>
                  <td className="p-4">{producto.cantidad}</td>
                  <td className="p-4">{producto.autor}</td>
                  <td className="p-4">{producto.editorial}</td>
                  <td className="p-4">{producto.numPaginas}</td>
                  <td className="p-4">{producto.categoria}</td>
                  <td className="p-4">{producto.estado}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEditar(producto.id)}
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

export default CrudProducto;
