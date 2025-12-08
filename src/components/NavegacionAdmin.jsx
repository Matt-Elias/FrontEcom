import { useNavigate } from "react-router-dom"

function NavegacionAdmin({ seccionActiva }) {
  const navigate = useNavigate()

  const secciones = [
    { id: "pedidos", nombre: "Pedidos", ruta: "/admin" },
    { id: "productos", nombre: "Productos", ruta: "/admin/productos" },
    { id: "usuarios", nombre: "Usuarios", ruta: "/admin/usuarios" },
    { id: "categorias", nombre: "Categorías", ruta: "/admin/categorias" },
  ]

  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      {secciones.map((seccion) => (
        <button
          key={seccion.id}
          onClick={() => navigate(seccion.ruta)}
          className={`col-span-3 h-11 rounded font-medium transition-colors ${
            seccionActiva === seccion.id ? "bg-[#22c55e] text-black" : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          {seccion.nombre}
        </button>
      ))}
    </div>
  )
}

export default NavegacionAdmin;
