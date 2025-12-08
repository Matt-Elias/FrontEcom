// src/components/Navbar.jsx
import { AiOutlineHome, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom"; // si usas react-router

function Navbar() {
  const navItems = [
    { label: "Inicio", icon: <AiOutlineHome className="w-6 h-6" />, path: "/" },
    { label: "Perfil", icon: <AiOutlineUser className="w-6 h-6" />, path: "/perfil" },
    { label: "Favoritos", icon: <AiOutlineHeart className="w-6 h-6" />, path: "/favoritos" },
    { label: "Carrito", icon: <AiOutlineShoppingCart className="w-6 h-6" />, path: "/carrito" },
    { label: "Cerrar sesión", icon: <AiOutlineLogout className="w-6 h-6" />, path: "/logout" },
  ];

  return (
    <nav className="bg-green-500 text-white w-full px-4 py-2">
      <div className="grid grid-cols-12 gap-2 items-center">
        {navItems.map((item, index) => (
          <div key={index} className="col-span-2">
            <Link
              to={item.path}
              className="flex flex-col items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px]
                         hover:bg-green-600 rounded-lg transition-colors duration-200"
              aria-label={item.label}
            >
              {item.icon}
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
